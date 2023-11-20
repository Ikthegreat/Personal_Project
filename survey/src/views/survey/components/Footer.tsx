import { defaultLayoutState } from '@recoil/RootState';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { SurveyFooterProps } from '@survey/interfaces';

function Footer({ back, add, preview }: SurveyFooterProps) {
  const [layout] = useRecoilState(defaultLayoutState);

  const styles = StyleSheet.create({
    footer: {
      width: '50%',
      height: layout.height / 20,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      bottom: 0,
      position: 'absolute',
    },
  });

  return (
    <View style={styles.footer}>
      <AntDesign name="arrowleft" size={24} color="black" onPress={back} />
      <AntDesign name="pluscircleo" size={24} color="black" onPress={add} />
      <Entypo name="share-alternative" size={24} color="black" onPress={preview} />
    </View>
  );
}

export default Footer;
