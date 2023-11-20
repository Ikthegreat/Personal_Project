import { useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { useRecoilState } from 'recoil';
import {
  columnState,
  defaultLayoutState,
  levelState,
  mineState,
  rowState,
} from '@recoil/RootState';

import CheckBox from '@common/widgets/CheckBox';
import { SelectProps } from '@start/interfaces';

function Select({ changeLevel }: SelectProps) {
  const [, setRow] = useRecoilState(rowState);
  const [, setCol] = useRecoilState(columnState);
  const [, setMine] = useRecoilState(mineState);
  const [level] = useRecoilState(levelState);
  const [layout] = useRecoilState(defaultLayoutState);

  useEffect(() => {
    if (level === 'Beginner') {
      setRow(8);
      setCol(8);
      setMine(10);
    } else if (level === 'Intermediate') {
      setRow(14);
      setCol(10);
      setMine(30);
    } else if (level === 'Expert') {
      setRow(32);
      setCol(14);
      setMine(50);
    }
  }, [level]);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
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
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.box} onPress={() => changeLevel('Beginner')}>
        <Text style={styles.text}>Beginner</Text>
        <CheckBox isChecked={level === 'Beginner'} onPress={() => changeLevel('Beginner')} />
      </Pressable>
      <Pressable style={styles.box} onPress={() => changeLevel('Intermediate')}>
        <Text style={styles.text}>Intermediate</Text>
        <CheckBox
          isChecked={level === 'Intermediate'}
          onPress={() => changeLevel('Intermediate')}
        />
      </Pressable>
      <Pressable style={styles.box} onPress={() => changeLevel('Expert')}>
        <Text style={styles.text}>Expert</Text>
        <CheckBox isChecked={level === 'Expert'} onPress={() => changeLevel('Expert')} />
      </Pressable>
    </View>
  );
}

export default Select;
