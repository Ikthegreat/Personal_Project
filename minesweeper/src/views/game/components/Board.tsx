import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { useRecoilState } from 'recoil';
import {
  boardLayout,
  boardState,
  columnState,
  gameState,
  levelState,
  mineState,
  rowState,
} from '@recoil/RootState';
import { createBoard } from '@common/utils/createBoard';
import { useEffect } from 'react';
import Cell from './Cell';

function Board() {
  const [row] = useRecoilState(rowState);
  const [col] = useRecoilState(columnState);
  const [mine] = useRecoilState(mineState);
  const [layout, setLayout] = useRecoilState(boardLayout);
  const [board, setBoard] = useRecoilState(boardState);
  const [, setGameState] = useRecoilState(gameState);
  const [level] = useRecoilState(levelState);

  useEffect(() => {
    setGameState('gaming');
    const initializedBoard = createBoard({ row, col, mine });
    setBoard(initializedBoard);

    return () => {
      setGameState('end');
    };
  }, [level, row, col, mine, setBoard]);

  const cellSize =
    layout.height / row > layout.width / col
      ? (layout.width / col) * 0.9
      : (layout.height / row) * 0.9;

  const styles = StyleSheet.create({
    board: {
      width: '97%',
      height: '85%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2%',
    },
    row: {
      height: cellSize,
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: cellSize / 25,
    },
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  return (
    <View style={styles.board} onLayout={handleLayout}>
      {board.map((i, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {i.map((j, colIndex) => (
            <Cell
              key={`${rowIndex}${colIndex}`}
              row={rowIndex}
              col={colIndex}
              mineCount={j.mineCount}
              cellSize={cellSize}
              state={j.state}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

export default Board;
