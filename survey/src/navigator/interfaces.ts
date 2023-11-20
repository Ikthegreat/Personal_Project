import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Navigation Interface

export type RootStackParamList = {
  Start: undefined;
  Survey: undefined;
  Preview: undefined;
};

export interface StartNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Start'>;
}

export interface SurveyNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Survey'>;
}

export interface PreviewNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Preview'>;
}
