import { View, Text, Image, StyleSheet, LayoutChangeEvent } from 'react-native';
import CreateSurvey from './components/CreateSurvey';
import { StartNavigationProps } from '@navigator/interfaces';
import { useRecoilState } from 'recoil';
import { currentSurveyKey, defaultLayoutState, surveyState } from '@recoil/RootState';
import { emptySurvey } from '@utils/emptySurvey';
import SurveyList from './components/SurveyList';
import Space from '@widgets/Space';

function Start({ navigation }: StartNavigationProps) {
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [, setSurveyKey] = useRecoilState(currentSurveyKey);
  const [layout, setLayout] = useRecoilState(defaultLayoutState);

  const handlePressCreateSurvey = () => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey.unshift(emptySurvey(0));
    setSurvey(updatedSurvey);
    setSurveyKey(0);
    navigation.navigate('Survey');
  };

  const handlePressRecentSurvey = (surveyKey: number) => {
    setSurveyKey(surveyKey);
    navigation.navigate('Survey');
  };

  const defaultLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  const styles = StyleSheet.create({
    page: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    header: {
      width: layout.width,
      height: layout.height / 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: layout.width / 30,
      paddingTop: layout.height / 30,
    },
    headerText: {
      paddingLeft: 10,
      fontSize: 20,
    },
    headerIcon: {
      width: layout.width / 12,
      height: layout.height / 20,
    },
    create: {
      width: layout.width,
      height: layout.height / 3.5,
      backgroundColor: '#f1f3f4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    recent: {
      width: layout.width,
      height: layout.height * 0.6143,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.page} onLayout={defaultLayout}>
      <View style={styles.header}>
        <Image source={require('@assets/forms_2020q4_48dp.png')} style={styles.headerIcon} />
        <Text style={styles.headerText}>설문지</Text>
      </View>
      <View style={styles.create}>
        <CreateSurvey onPress={handlePressCreateSurvey} />
        <Space dir="row" size={10} />
        <Text>새 양식 시작하기</Text>
      </View>
      <View style={styles.recent}>
        <Space dir="row" size={20} />
        <Text>최근 설문지</Text>
        <Space dir="row" size={10} />
        <SurveyList onPress={handlePressRecentSurvey} />
      </View>
    </View>
  );
}

export default Start;
