export interface SpaceProps {
  dir: 'row' | 'col';
  size: number;
}

export interface SelectBoxProps {
  type: 'select' | 'check';
  isSelected: boolean;
}
