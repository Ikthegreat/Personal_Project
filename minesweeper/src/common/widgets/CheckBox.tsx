import { Pressable, StyleSheet } from 'react-native';
import { CheckBoxProps } from '../interfaces';
import { useRecoilState } from 'recoil';
import { defaultLayoutState } from '@recoil/RootState';

function CheckBox({ isChecked, onPress }: CheckBoxProps) {
  const [layout] = useRecoilState(defaultLayoutState);

  const styles = StyleSheet.create({
    box: {
      width: layout.width / 20,
      aspectRatio: 1,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: isChecked ? 'black' : 'white',
      borderRadius: layout.width / 100,
    },
  });
  return <Pressable style={styles.box} onPress={onPress}></Pressable>;
}

export default CheckBox;
