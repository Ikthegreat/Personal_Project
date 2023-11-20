import { View, ScrollView, StyleSheet } from 'react-native';
import { PreviewNavigationProps } from '@navigator/interfaces';
import { useRecoilState } from 'recoil';
import { currentSurveyKey, defaultLayoutState, surveyState } from '@recoil/RootState';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function Preview({ navigation }: PreviewNavigationProps) {
  const [layout] = useRecoilState(defaultLayoutState);
  const [survey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);

  const returnToSurvey = () => {
    navigation.navigate('Survey');
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
    },
  });

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <View style={styles.forms}>
          {survey[surveyKey].form.map((form, index: number) => (
            <Form formIndex={index} key={index} />
          ))}
        </View>
      </ScrollView>
      <Footer back={returnToSurvey} />
    </View>
  );
}

export default Preview;
