import { surveyState } from '@recoil/RootState';
import { SurveyListProps } from '@start/interface';
import { View, Pressable, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import SurveyItem from './SurveyItem';

function SurveyList({ onPress }: SurveyListProps) {
  const [survey] = useRecoilState(surveyState);

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {survey.map((item, index) => (
        <Pressable onPress={() => onPress(index)} key={index}>
          <SurveyItem index={index} />
        </Pressable>
      ))}
    </View>
  );
}

export default SurveyList;
