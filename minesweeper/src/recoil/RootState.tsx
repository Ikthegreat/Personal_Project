import {
  atom,
  // selector
} from 'recoil';

export const rowState = atom({
  key: 'rowState',
  default: 8,
});

export const columnState = atom({
  key: 'columnState',
  default: 8,
});

export const mineState = atom({
  key: 'mineState',
  default: 8,
});

// export const parsedRowState = selector({
//   key: 'parsedRowState',
//   get: ({ get }) => {
//     const row = get(rowState);
//     if (row !== '') {
//       return parseInt(row, 10);
//     } else {
//       return 0;
//     }
//   },
// });

// export const parsedColumnState = selector({
//   key: 'parsedColumnState',
//   get: ({ get }) => {
//     const col = get(columnState);
//     if (col !== '') {
//       return parseInt(col, 10);
//     } else {
//       return 0;
//     }
//   },
// });

// export const parsedMineState = selector({
//   key: 'parsedMineState',
//   get: ({ get }) => {
//     const mine = get(mineState);
//     if (mine !== '') {
//       return parseInt(mine, 10);
//     } else {
//       return 0;
//     }
//   },
// });

export const levelState = atom({
  key: 'levelState',
  default: 'Beginner',
});

export const boardLayout = atom({
  key: 'boardLayout',
  default: {
    width: 0,
    height: 0,
  },
});

export const runtimeState = atom({
  key: 'runtimeState',
  default: 0,
});

export const bottomSheetVisible = atom({
  key: 'bottomSheetVisible',
  default: false,
});

export const boardState = atom({
  key: 'boardState',
  default: [[{ mineCount: 0, state: 0 }]],
});

export const gameState = atom({
  key: 'gameState',
  default: '',
});

export const flagCount = atom({
  key: 'flagCount',
  default: 0,
});

export const defaultLayoutState = atom({
  key: 'defaultLayoutState',
  default: {
    width: 0,
    height: 0,
  },
});

export const listModalVisible = atom({
  key: 'listModalVisible',
  default: false,
});

export const listModalType = atom({
  key: 'listModalType',
  default: '',
});
