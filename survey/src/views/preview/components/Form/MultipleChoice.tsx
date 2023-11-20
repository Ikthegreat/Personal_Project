import { StyleSheet, Pressable, Text, View } from 'react-native';
import { currentSurveyKey, defaultLayoutState, surveyState } from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import Space from '@widgets/Space';
import SelectBox from '@widgets/SelectBox';
import { FormProps } from '@preview/interfaces';

function MultipleChoice({ formIndex }: FormProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);

  const handleSelect = (index: number) => {
    if (survey[surveyKey].form[formIndex].selected === index) {
      const updatedSurvey = JSON.parse(JSON.stringify(survey));
      updatedSurvey[surveyKey].form[formIndex].selected = -1;
      setSurvey(updatedSurvey);
    } else {
      const updatedSurvey = JSON.parse(JSON.stringify(survey));
      updatedSurvey[surveyKey].form[formIndex].selected = index;
      setSurvey(updatedSurvey);
    }
  };

  const styles = StyleSheet.create({
    form: {
      width: '100%',
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: layout.width / 25,
      marginVertical: layout.height / 300,
    },
    title: {
      fontSize: 18,
    },
    text: {
      marginVertical: 5,
    },
    required: {
      color: 'red',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
    },
  });
  return (
    <Pressable style={styles.form}>
      <Space dir="row" size={20} />
      <View style={styles.row}>
        <Text style={styles.title}>{survey[surveyKey].form[formIndex].title}</Text>
        {survey[surveyKey].form[formIndex].isRequired && (
          <Text style={styles.required}> (필수)</Text>
        )}
      </View>
      <Space dir="row" size={20} />
      {survey[surveyKey].form[formIndex].context.map(
        (context, index) =>
          typeof context === 'string' && (
            <Pressable style={styles.row} key={index} onPress={() => handleSelect(index)}>
              <SelectBox
                type="select"
                isSelected={survey[surveyKey].form[formIndex].selected === index}
              />
              <Space dir="col" size={10} />
              <Text style={styles.text}>{context}</Text>
            </Pressable>
          ),
      )}
      <Space dir="row" size={20} />
    </Pressable>
  );
}

export default MultipleChoice;
