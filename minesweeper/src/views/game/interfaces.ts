export interface FooterProps {
  returnToStart: () => void;
}

export interface BottomSheetProps {
  resetGame: () => void;
}

export interface CellProps {
  row: number;
  col: number;
  cellSize: number;
  mineCount: number;
  state: number;
}
