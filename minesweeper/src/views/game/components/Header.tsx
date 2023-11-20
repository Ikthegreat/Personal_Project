import {
  bottomSheetVisible,
  flagCount,
  gameState,
  mineState,
  runtimeState,
} from '@recoil/RootState';
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { useRecoilState } from 'recoil';
import { AntDesign } from '@expo/vector-icons';

function Header() {
  const [mine] = useRecoilState(mineState);
  const [flag] = useRecoilState(flagCount);
  const [runtime, setRuntime] = useRecoilState(runtimeState);
  const [, setVisible] = useRecoilState(bottomSheetVisible);
  const [gameStatus] = useRecoilState(gameState);

  useEffect(() => {
    let runtimeCount: NodeJS.Timeout;
    if (gameStatus !== 'end') {
      setRuntime(0);
      runtimeCount = setInterval(() => {
        setRuntime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(runtimeCount);
    };
  }, [gameStatus]);

  const pressSmile = () => {
    Alert.alert('게임을 초기화하시겠습니까?', '', [
      { text: 'Yes', onPress: () => setVisible(true) },
      { text: 'No' },
    ]);
  };

  return (
    <View style={styles.header}>
      <View style={styles.mine}>
        <Text>{mine - flag}</Text>
      </View>
      <TouchableHighlight
        style={styles.smile}
        activeOpacity={0.8}
        underlayColor="gray"
        onPress={pressSmile}
      >
        <AntDesign name="smileo" size={25} color={'black'} />
      </TouchableHighlight>
      <View style={styles.timer}>
        <Text>{runtime}</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: '1%',
  },
  mine: {
    width: '20%',
    height: '50%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smile: {
    height: '50%',
    aspectRatio: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    width: '20%',
    height: '50%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
