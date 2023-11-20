import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Navigation Interface

export type RootStackParamList = {
  Start: undefined;
  Game: undefined;
};

export interface StartNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Start'>;
}

export interface GameNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Game'>;
}
