import { BoardType } from '@common/interfaces';

export function checkBoard(board: BoardType) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j].state === 0 && board[i][j].mineCount !== -1) {
        return false;
      }
    }
  }
  return true;
}
