import { currentSurveyKey, defaultLayoutState, surveyState } from '@recoil/RootState';
import Space from '@widgets/Space';
import { View, TextInput, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';

function Header() {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);

  const handleChangeTitle = (text: string) => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].title = text;
    setSurvey(updatedSurvey);
  };

  const handleChangeDescription = (text: string) => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].description = text;
    setSurvey(updatedSurvey);
  };

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
      <TextInput
        value={survey[surveyKey].title}
        onChangeText={handleChangeTitle}
        style={styles.title}
      ></TextInput>
      <Space dir="row" size={10} />
      <TextInput
        value={survey[surveyKey].description}
        onChangeText={handleChangeDescription}
      ></TextInput>
    </View>
  );
}

export default Header;
