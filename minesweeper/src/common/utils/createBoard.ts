import { CreateBoardProps } from '@common/interfaces';

export function createBoard({ row, col, mine }: CreateBoardProps) {
  // mineCount: 지뢰일 경우 -1, 0 이상일 경우 주변의 지뢰 갯수
  // state: 상태, 0일 경우 기본, 1일 경우 누름

  const board = [];
  for (let r = 0; r < row; r++) {
    const rowArray = [];
    for (let c = 0; c < col; c++) {
      rowArray.push({ mineCount: 0, state: 0 });
    }
    board.push(rowArray);
  }

  let count = mine;
  while (count > 0) {
    const r = Math.floor(Math.random() * row);
    const c = Math.floor(Math.random() * col);
    if (board[r][c].mineCount === 0) {
      board[r][c].mineCount = -1;
      count = count - 1;
    }
  }
  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (board[r][c].mineCount !== -1) {
        for (const d of directions) {
          const nr = r + d[0];
          const nc = c + d[1];
          if (0 <= nr && nr < row && 0 <= nc && nc < col) {
            if (board[nr][nc].mineCount === -1) {
              board[r][c].mineCount += 1;
            }
          }
        }
      }
    }
  }

  return board;
}
