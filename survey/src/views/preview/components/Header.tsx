import { currentSurveyKey, defaultLayoutState, surveyState } from '@recoil/RootState';
import Space from '@widgets/Space';
import { View, Text, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';

function Header() {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);

  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: layout.height / 8,
      borderWidth: 1,
      borderTopWidth: 10,
      borderTopColor: '#673ab7',
      borderLeftColor: 'lightgray',
      borderRightColor: 'lightgray',
      borderBottomColor: 'lightgray',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: layout.width / 25,
    },
    title: {
      fontSize: 25,
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{survey[surveyKey].title}</Text>
      <Space dir="row" size={20} />
      <Text>{survey[surveyKey].description}</Text>
    </View>
  );
}

export default Header;
