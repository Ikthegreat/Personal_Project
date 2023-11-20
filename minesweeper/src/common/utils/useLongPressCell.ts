import { Alert } from 'react-native';
import { boardState, flagCount, gameState } from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import { checkBoard } from './useCheckBoard';

export function useLongPressCell() {
  const [board, setBoard] = useRecoilState(boardState);
  const [gameStatus, setGameStatus] = useRecoilState(gameState);
  const [, setFlagCount] = useRecoilState(flagCount);

  const longPressCell = (row: number, col: number) => {
    // 열려있는 칸을 터치했거나, 게임이 종료된 경우에는 함수 종료시키기
    if (board[row][col].state === 1 || gameStatus === 'end') {
      return;
    }

    const updatedBoard = JSON.parse(JSON.stringify(board));
    // 이미 flag라면 지우기
    if (updatedBoard[row][col].state === 4) {
      updatedBoard[row][col] = { ...updatedBoard[row][col], state: 0 };
      setFlagCount((prev) => prev - 1);
    }
    // flag 처리를 위한 state 4
    else {
      updatedBoard[row][col] = { ...updatedBoard[row][col], state: 4 };
      setFlagCount((prev) => prev + 1);
    }
    setBoard(updatedBoard);
    if (checkBoard(updatedBoard)) {
      Alert.alert('게임 승리!!');
      setGameStatus('end');
    }
  };

  return longPressCell;
}
