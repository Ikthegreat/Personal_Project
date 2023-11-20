import { boardState, gameState } from '@recoil/RootState';
import { useRecoilState } from 'recoil';

import { Alert } from 'react-native';
import { OpenCellProps } from '@common/interfaces';
import { checkBoard } from './useCheckBoard';

export function usePressCell() {
  const [board, setBoard] = useRecoilState(boardState);
  const [gameStatus, setGameStatus] = useRecoilState(gameState);

  const pressCell = (row: number, col: number) => {
    // 열려있는 칸을 터치했거나, flag 처리를 했거나, 게임이 종료된 경우에는 함수 종료시키기
    if (board[row][col].state === 1 || board[row][col].state === 4 || gameStatus === 'end') {
      return;
    }

    const updatedBoard = JSON.parse(JSON.stringify(board));
    openCell({ board: updatedBoard, row, col });
    if (checkBoard(updatedBoard)) {
      Alert.alert('게임 승리!!');
      setGameStatus('end');
    }
    setBoard(updatedBoard);
  };

  const openCell = ({ board, row, col }: OpenCellProps) => {
    // 범위 밖이면 함수 종료
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
      return;
    }

    // 이미 열린 칸이면 함수 종료
    if (board[row][col].state === 1) {
      return;
    }

    // 지뢰를 터치했을 경우
    if (board[row][col].mineCount === -1) {
      // 빨간색 배경, 지뢰 오픈하기 위한 state 2
      board[row][col] = { ...board[row][col], state: 2 };
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
          if (board[i][j].state === 0 && board[i][j].mineCount === -1) {
            // 흰색 배경, 지뢰 오픈하기 위한 state 3
            board[i][j] = { ...board[i][j], state: 3 };
          }
        }
      }
      setBoard(board);
      setGameStatus('end');
      Alert.alert('지뢰 발견!! 게임 패배');
      return;
    } else {
      // 터치 처리
      board[row][col] = { ...board[row][col], state: 1 };
      // 지뢰가 없는 칸을 터치할 때 주변에 지뢰가 없는 칸들을 자동으로 열어준다
      if (board[row][col].mineCount === 0) {
        const directions = [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
        ];
        for (const d of directions) {
          openCell({ board, row: row + d[0], col: col + d[1] });
        }
      }
    }
  };

  return pressCell;
}
