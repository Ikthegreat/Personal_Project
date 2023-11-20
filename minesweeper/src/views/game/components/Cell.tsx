import { useLongPressCell } from '@common/utils/useLongPressCell';
import { usePressCell } from '@common/utils/usePressCell';
import { CellProps } from '@game/interfaces';
import { Text, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

function Cell({ row, col, cellSize, mineCount, state }: CellProps) {
  const handlePressCell = usePressCell();
  const handleLongPressCell = useLongPressCell();

  const handlePress = () => {
    handlePressCell(row, col);
  };

  const handleLongPress = () => {
    handleLongPressCell(row, col);
  };

  const styles = StyleSheet.create({
    cell: {
      width: cellSize,
      height: '100%',
      borderWidth: cellSize / 20,
      borderColor: 'black',
      margin: cellSize / 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        state === 1 ? 'gray' : state === 2 ? 'red' : state === 3 ? 'lightgray' : 'white',
    },
  });

  return (
    <Pressable style={styles.cell} onPress={handlePress} onLongPress={handleLongPress}>
      {state === 1 && mineCount !== 0 && <Text>{mineCount}</Text>}
      {(state === 2 || state === 3) && (
        <MaterialCommunityIcons name="mine" size={cellSize * 0.7} color="black" />
      )}
      {state === 4 && <Ionicons name="flag" size={cellSize * 0.7} color="red" />}
    </Pressable>
  );
}

export default Cell;
