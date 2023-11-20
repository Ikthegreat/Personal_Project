import { Pressable, Text, View, StyleSheet, Dimensions } from 'react-native';

import { StartNavigationProps } from '@navigator/interfaces';

import { useRecoilState } from 'recoil';
import {
  mineState,
  levelState,
  defaultLayoutState,
  listModalVisible,
  listModalType,
} from '@recoil/RootState';

import Custom from './components/Custom';
import CheckBox from '@common/widgets/CheckBox';
import Space from '@common/widgets/Space';
import Select from './components/Select';
import { useEffect } from 'react';
import { ListModal } from '@common/widgets/ListModal';

function Start({ navigation }: StartNavigationProps) {
  const [mine] = useRecoilState(mineState);
  const [level, setLevel] = useRecoilState(levelState);
  const [layout, setLayout] = useRecoilState(defaultLayoutState);
  const [, setListModal] = useRecoilState(listModalVisible);
  const [, setListModalType] = useRecoilState(listModalType);

  useEffect(() => {
    const { width, height } = Dimensions.get('window');
    setLayout({ width, height });
  }, []);

  const moveToGame = () => {
    navigation.navigate('Game');
  };

  const changeLevel = (lev: string) => {
    if (level === 'Custom' && lev === 'Custom') {
      setLevel('Beginner');
    } else {
      setLevel(lev);
    }
  };

  const handleChange = (type: string) => {
    setListModalType(type);
    setListModal(true);
  };

  const styles = StyleSheet.create({
    title: {
      fontSize: 50,
    },
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
    setting: {
      width: layout.width * 0.8,
      height: layout.height * 0.6,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
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
    button: {
      width: layout.width * 0.6,
      height: layout.height / 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      marginVertical: 10,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 20,
    },
    mine: {
      fontSize: 25,
    },
  });

  return (
    <View style={styles.container}>
      <ListModal />
      <Space dir="row" size={layout.height / 10} />
      <Text style={styles.title}>Mine Sweeper</Text>
      <Space dir="row" size={layout.height / 15} />
      <View style={styles.setting}>
        {level !== 'Custom' && <Select changeLevel={changeLevel} />}
        <Pressable style={styles.box} onPress={() => changeLevel('Custom')}>
          <Text>직접 보드 크기 설정하기</Text>
          <Space dir="col" size={5} />
          <CheckBox isChecked={level === 'Custom'} onPress={() => changeLevel('Custom')} />
        </Pressable>
        {level === 'Custom' && <Custom handleChange={handleChange} />}
        <Pressable style={styles.box} onPress={() => handleChange('mine')}>
          <Text style={styles.text}>지뢰 수</Text>
          <Text style={styles.mine}>{mine}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={moveToGame}>
          <Text style={styles.text}>시작하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Start;
