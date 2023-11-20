import { View, Text, Modal, StyleSheet, TouchableHighlight, Pressable, Alert } from 'react-native';
import {
  bottomSheetVisible,
  currentSurveyKey,
  defaultLayoutState,
  selectedFormIndex,
  surveyState,
} from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Ionicons,
  Feather,
  AntDesign,
} from '@expo/vector-icons';

import Space from '@widgets/Space';
import { changeForm } from '@utils/changeForm';

function BottomSheet() {
  const [layout] = useRecoilState(defaultLayoutState);
  const [visible, setVisible] = useRecoilState(bottomSheetVisible);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [surveyKey] = useRecoilState(currentSurveyKey);
  const [selectedIndex] = useRecoilState(selectedFormIndex);

  const closeBottomSheet = () => {
    setVisible(false);
  };

  const handleChangeForm = (toChange: string) => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form[selectedIndex] = changeForm(
      updatedSurvey[surveyKey].form[selectedIndex],
      toChange,
    );
    setSurvey(updatedSurvey);
    setVisible(false);
  };

  const copyForm = () => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form.splice(
      selectedIndex + 1,
      0,
      updatedSurvey[surveyKey].form[selectedIndex],
    );
    setSurvey(updatedSurvey);
    setVisible(false);
  };

  const deleteForm = () => {
    const updatedSurvey = JSON.parse(JSON.stringify(survey));
    updatedSurvey[surveyKey].form.splice(selectedIndex, 1);
    setSurvey(updatedSurvey);
    setVisible(false);
  };

  const handleDeleteForm = () => {
    Alert.alert('질문 삭제하기', '선택한 질문을 삭제하시겠습니까?', [
      { text: 'Yes', onPress: () => deleteForm() },
      { text: 'No' },
    ]);
  };

  const styles = StyleSheet.create({
    container: {
      height: layout.height,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    shade: {
      width: layout.width,
      height: layout.height / 2,
      backgroundColor: 'black',
      opacity: 0.4,
    },
    sheet: {
      width: '100%',
      height: layout.height / 2,
      backgroundColor: 'white',
      paddingTop: layout.height / 40,
      paddingLeft: layout.height / 40,
    },
    section: {
      width: layout.width * 0.9,
      height: layout.height / 15,
      justifyContent: 'center',
      paddingLeft: layout.height / 80,
    },
    title: {
      fontSize: 20,
    },
    row: {
      flexDirection: 'row',
    },
  });

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={visible}>
        <View style={styles.container}>
          <Pressable style={styles.shade} onPress={closeBottomSheet}></Pressable>
          <View style={styles.sheet}>
            <Text>추가 기능</Text>
            <Space dir="row" size={10} />
            <TouchableHighlight
              style={styles.section}
              underlayColor={'lightgray'}
              onPress={() => handleChangeForm('단답형')}
            >
              <View style={styles.row}>
                <MaterialIcons name="short-text" size={24} color="black" />
                <Space dir="col" size={15} />
                <Text>단답형</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.section}
              underlayColor={'lightgray'}
              onPress={() => handleChangeForm('장문형')}
            >
              <View style={styles.row}>
                <Entypo name="text" size={24} color="black" />
                <Space dir="col" size={15} />
                <Text>장문형</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.section}
              underlayColor={'lightgray'}
              onPress={() => handleChangeForm('객관식')}
            >
              <View style={styles.row}>
                <FontAwesome5 name="dot-circle" size={24} color="black" />
                <Space dir="col" size={15} />
                <Text>객관식</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.section}
              underlayColor={'lightgray'}
              onPress={() => handleChangeForm('체크박스')}
            >
              <View style={styles.row}>
                <Ionicons name="checkbox" size={24} color="black" />
                <Space dir="col" size={15} />
                <Text>체크박스</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.section}
              underlayColor={'lightgray'}
              onPress={copyForm}
            >
              <View style={styles.row}>
                <Feather name="copy" size={24} color="black" />
                <Space dir="col" size={15} />
                <Text>질문 복제하기</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.section}
              underlayColor={'lightgray'}
              onPress={handleDeleteForm}
            >
              <View style={styles.row}>
                <AntDesign name="delete" size={24} color="black" />
                <Space dir="col" size={15} />
                <Text>질문 삭제하기</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomSheet;
