import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { GameNavigationProps } from '@navigator/interfaces';
import { useRecoilState } from 'recoil';
import {
  levelState,
  bottomSheetVisible,
  rowState,
  columnState,
  mineState,
} from '@recoil/RootState';

import Footer from './components/Footer';
import Board from './components/Board';
import Header from './components/Header';
import BottomSheet from './components/BottomSheet';
import { CommonActions, useIsFocused } from '@react-navigation/native';

function Game({ navigation }: GameNavigationProps) {
  const [, setRow] = useRecoilState(rowState);
  const [, setCol] = useRecoilState(columnState);
  const [, setMine] = useRecoilState(mineState);
  const [level] = useRecoilState(levelState);
  const [, setSheetVisible] = useRecoilState(bottomSheetVisible);
  const isFocused = useIsFocused();

  const returnToStart = () => {
    navigation.push('Start');
  };

  const resetGame = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Game' }],
      }),
    );
    setSheetVisible(false);
  };

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

  return (
    isFocused && (
      <View style={styles.container}>
        <Header />
        <Board />
        <Footer returnToStart={returnToStart} />
        <BottomSheet resetGame={resetGame} />
      </View>
    )
  );
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
