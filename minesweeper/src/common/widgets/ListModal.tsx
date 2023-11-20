import {
  columnState,
  defaultLayoutState,
  listModalType,
  listModalVisible,
  mineState,
  rowState,
} from '@recoil/RootState';
import { View, Modal, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';

export function ListModal() {
  const [layout] = useRecoilState(defaultLayoutState);
  const [listModal, setListModal] = useRecoilState(listModalVisible);
  const [listType] = useRecoilState(listModalType);
  const [row, setRow] = useRecoilState(rowState);
  const [column, setColumn] = useRecoilState(columnState);
  const [, setMine] = useRecoilState(mineState);
  const mineMaximum = (row * column) / 3;

  type ItemProps = { item: number };

  const handlePressItem = (item: number) => {
    if (listType === 'mine') {
      setMine(item);
    } else if (listType === 'row') {
      setRow(item);
    } else if (listType === 'column') {
      setColumn(item);
    }
    setListModal(false);
  };

  const Item = ({ item }: ItemProps) => {
    return (
      <TouchableOpacity style={styles.list} onPress={() => handlePressItem(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const data = () => {
    if (listType === 'mine') {
      return Array.from({ length: mineMaximum - 2 }, (_, index) => 1 + index);
    } else if (listType === 'column') {
      const minimum = 5;
      const maximum = 14;
      return Array.from({ length: maximum - minimum + 1 }, (_, index) => minimum + index);
    } else if (listType === 'row') {
      const minimum = 5;
      const maximum = 32;
      return Array.from({ length: maximum - minimum + 1 }, (_, index) => minimum + index);
    }
  };

  const styles = StyleSheet.create({
    modal: {
      width: layout.width,
      height: layout.height,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5,
    },
    container: {
      width: layout.width * 0.7,
      height: layout.height * 0.6,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      zIndex: 10,
    },
    list: {
      borderWidth: 1,
      margin: 1,
      borderRadius: 5,
    },
    text: {
      fontSize: 20,
      margin: 10,
    },
  });

  return (
    <Modal visible={listModal} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <FlatList data={data()} renderItem={Item} />
        </View>
      </View>
    </Modal>
  );
}
