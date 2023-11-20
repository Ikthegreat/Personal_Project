import { defaultLayoutState } from '@recoil/RootState';
import { View, Text, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { PreviewFooterProps } from '@preview/interfaces';

function Footer({ back }: PreviewFooterProps) {
  const [layout] = useRecoilState(defaultLayoutState);

  const styles = StyleSheet.create({
    footer: {
      width: '40%',
      height: layout.height / 30,
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
      <Text onPress={back}>설문으로 돌아가기</Text>
    </View>
  );
}

export default Footer;
