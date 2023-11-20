import { View, StyleSheet } from 'react-native';
import { SurveyNavigationProps } from '@navigator/interfaces';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  FormInterface,
  currentSurveyKey,
  defaultLayoutState,
  selectedFormIndex,
  surveyState,
} from '@recoil/RootState';
import { defaultForm } from '@utils/defaultForm';
import Form from './components/Form';
import BottomSheet from './components/BottomSheet';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

function Survey({ navigation }: SurveyNavigationProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedFormIndex);

  const resetSelectForm = useResetRecoilState(selectedFormIndex);

  // 페이지를 벗어날 때 Reset해주기
  const returnToStart = () => {
    resetSelectForm();
    navigation.navigate('Start');
  };

  const preview = () => {
    resetSelectForm();
    navigation.navigate('Preview');
  };

  const addForm = () => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form.push(defaultForm());
    setSurvey(updatedSurvey);
  };

  const styles = StyleSheet.create({
    page: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f0ebf8',
      borderWidth: 1,
      paddingVertical: layout.height / 20,
      alignItems: 'center',
    },
    scrollView: {
      width: '95%',
    },
    forms: {
      paddingVertical: layout.height / 300,
      height: layout.height * 0.77,
    },
  });

  const renderItem = ({ drag, isActive, getIndex }: RenderItemParams<FormInterface>) => {
    return <Form formIndex={getIndex() || 0} drag={drag} isActive={isActive} />;
  };

  const handleDragEnd = (data: FormInterface[]) => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    // 움직인 Form 추적
    const movingItem = survey[surveyKey].form[selectedIndex];
    // 움직인 Form의 현재 인덱스 추적
    const movedIndex = data.indexOf(movingItem);
    updatedSurvey[surveyKey].form = data;
    setSurvey(updatedSurvey);
    // 움직인 Form의 현재 인덱스로 선택 인덱스 수정
    setSelectedIndex(movedIndex);
  };

  return (
    <View style={styles.page}>
      <View style={styles.scrollView}>
        <Header />
        <View style={styles.forms}>
          <DraggableFlatList
            data={survey[surveyKey].form}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            onDragEnd={({ data }) => handleDragEnd(data)}
          />
          {/* {survey[surveyKey].form.map((form, index: number) => (
            // <Form formIndex={index} key={index} />
          ))} */}
        </View>
      </View>
      <Footer back={returnToStart} add={addForm} preview={preview} />
      <BottomSheet />
    </View>
  );
}

export default Survey;
