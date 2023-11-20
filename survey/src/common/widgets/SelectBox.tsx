import { defaultLayoutState } from '@recoil/RootState';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { SelectBoxProps } from '../interfaces';

function SelectBox({ type, isSelected }: SelectBoxProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const styles = StyleSheet.create({
    box: {
      width: layout.width / 20,
      aspectRatio: 1,
      borderWidth: 2,
      borderColor: isSelected ? '#673ab7' : 'lightgray',
      borderRadius: type === 'select' ? layout.width / 20 : layout.width / 100,
      backgroundColor: isSelected ? '#673ab7' : 'white',
    },
  });
  return <View style={styles.box} />;
}

export default SelectBox;
