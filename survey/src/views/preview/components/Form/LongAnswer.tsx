import { TextInput, StyleSheet, Pressable, Text, View } from 'react-native';
import { currentSurveyKey, defaultLayoutState, surveyState } from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import Space from '@widgets/Space';
import { FormProps } from '@preview/interfaces';

function LongAnswer({ formIndex }: FormProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);

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
    required: {
      color: 'red',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
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
      <TextInput placeholder="장문형 텍스트" multiline={true}></TextInput>
      <Space dir="row" size={20} />
    </Pressable>
  );
}

export default LongAnswer;
