import { defaultLayoutState, surveyState } from '@recoil/RootState';
import { SurveyItemProps } from '@start/interface';
import { View, Text, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { Ionicons } from '@expo/vector-icons';
import Space from '@widgets/Space';

function SurveyItem({ index }: SurveyItemProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey] = useRecoilState(surveyState);

  const styles = StyleSheet.create({
    item: {
      width: layout.width * 0.9,
      height: layout.height / 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    createdAt: {
      color: 'gray',
    },
  });
  return (
    <View style={styles.item}>
      <Ionicons name="document-text" size={24} color="black" />
      <Space dir="col" size={10} />
      <View style={styles.text}>
        <Text>{survey[index].title}</Text>
        <Text style={styles.createdAt}>{survey[index].createdAt}</Text>
      </View>
    </View>
  );
}

export default SurveyItem;
