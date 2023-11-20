import { View, TextInput, StyleSheet, Pressable, Switch, Text } from 'react-native';
import {
  currentSurveyKey,
  defaultLayoutState,
  selectedFormIndex,
  surveyState,
} from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import Space from '@widgets/Space';
import { Entypo } from '@expo/vector-icons';
import { FormChildProps } from '@survey/interfaces';
import SelectBox from '@widgets/SelectBox';

function MultipleChoice({
  formIndex,
  drag,
  isActive,
  handlePressForm,
  handleIsRequired,
  handleBottomSheet,
}: FormChildProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);
  const [selectedIndex] = useRecoilState(selectedFormIndex);

  const handleChangeTitle = (text: string) => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form[formIndex].title = text;
    setSurvey(updatedSurvey);
  };

  const handleAddContext = () => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form[formIndex].context.push(
      `옵션 ${updatedSurvey[surveyKey].form[formIndex].context.length + 1}`,
    );
    setSurvey(updatedSurvey);
  };

  const handleDeleteContext = (index: number) => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form[formIndex].context.splice(index, 1);
    setSurvey(updatedSurvey);
  };

  const styles = StyleSheet.create({
    form: {
      width: '100%',
      borderWidth: 1,
      borderLeftWidth: selectedIndex === formIndex ? 10 : 1,
      borderColor: 'lightgray',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: layout.width / 25,
      marginVertical: layout.height / 300,
      opacity: isActive ? 0.7 : 1,
    },
    title: {
      fontSize: 18,
    },
    toolbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 20,
    },
    switch: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
    },
    dragPoint: {
      alignSelf: 'center',
      marginRight: 25,
    },
  });
  return (
    <Pressable style={styles.form} onPress={handlePressForm}>
      {selectedIndex === formIndex ? (
        <Entypo
          name="dots-three-horizontal"
          size={20}
          color="lightgray"
          style={styles.dragPoint}
          onLongPress={drag}
        />
      ) : (
        <Space dir="row" size={20} />
      )}
      <TextInput
        value={survey[surveyKey].form[formIndex].title}
        style={styles.title}
        onChangeText={handleChangeTitle}
      ></TextInput>
      <Space dir="row" size={20} />
      {survey[surveyKey].form[formIndex].context.map(
        (context, index) =>
          typeof context === 'string' && (
            <View style={styles.row} key={index}>
              <SelectBox type="select" isSelected={false} />
              <Space dir="col" size={10} />
              <TextInput value={context}></TextInput>
              {index > 0 && selectedIndex === formIndex && (
                <Pressable style={styles.row} onPress={() => handleDeleteContext(index)}>
                  <Entypo name="cross" size={15} color="black" />
                </Pressable>
              )}
            </View>
          ),
      )}
      <Space dir="row" size={20} />
      {selectedIndex === formIndex && (
        <View>
          <Text onPress={handleAddContext}>옵션 추가하기</Text>
          <View style={styles.toolbox}>
            <Pressable style={styles.switch} onPress={handleIsRequired}>
              <Text>필수</Text>
              <Space dir="col" size={5} />
              <Switch
                value={survey[surveyKey].form[formIndex].isRequired}
                onChange={handleIsRequired}
              />
            </Pressable>
            <Pressable onPress={handleBottomSheet}>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      )}
    </Pressable>
  );
}

export default MultipleChoice;
