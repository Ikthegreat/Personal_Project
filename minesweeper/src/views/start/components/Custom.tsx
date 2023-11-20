import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useRecoilState } from 'recoil';
import { rowState, columnState, defaultLayoutState } from '@recoil/RootState';
import { CustomProps } from '@start/interfaces';

function Custom({ handleChange }: CustomProps) {
  const [row] = useRecoilState(rowState);
  const [col] = useRecoilState(columnState);
  const [layout] = useRecoilState(defaultLayoutState);

  // const handleRowInput = (input: string) => {
  //   const parsedInput = parseInt(input);
  //   const isNumeric = !isNaN(parsedInput);
  //   if (isNumeric || input === '') {
  //     setRow(`${input}`);
  //   } else {
  //     Alert.alert('숫자만 입력해주세요.');
  //   }
  // };

  // const handleColInput = (input: string) => {
  //   const parsedInput = parseInt(input);
  //   const isNumeric = !isNaN(parsedInput);
  //   if (isNumeric || input === '') {
  //     setCol(`${input}`);
  //   } else {
  //     Alert.alert('숫자만 입력해주세요.');
  //   }
  // };

  const styles = StyleSheet.create({
    container: {
      width: layout.width * 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: layout.width * 0.6,
      height: layout.height / 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    text: {
      fontSize: 20,
    },
    numText: {
      fontSize: 25,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.box} onPress={() => handleChange('column')}>
        <Text style={styles.text}>가로</Text>
        <Text style={styles.numText}>{col}</Text>
      </Pressable>
      <Pressable style={styles.box} onPress={() => handleChange('row')}>
        <Text style={styles.text}>세로</Text>
        <Text style={styles.numText}>{row}</Text>
      </Pressable>
    </View>
  );
}

export default Custom;
