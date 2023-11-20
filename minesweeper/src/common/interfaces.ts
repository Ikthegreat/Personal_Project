import { PressableProps } from 'react-native';

export interface CheckBoxProps extends PressableProps {
  isChecked: boolean;
}

export interface SpaceProps {
  dir: 'row' | 'col';
  size: number;
}

export interface CreateBoardProps {
  row: number;
  col: number;
  mine: number;
}

export interface OpenCellProps {
  board: BoardType;
  row: number;
  col: number;
}

export type BoardType = { mineCount: number; state: number }[][];
