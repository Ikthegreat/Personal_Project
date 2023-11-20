import { FooterProps } from '@game/interfaces';
import { View, Pressable, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Footer({ returnToStart }: FooterProps) {
  const handleReturn = () => {
    Alert.alert('시작 화면으로 돌아가시겠습니까?', '게임이 초기화됩니다.', [
      { text: 'Yes', onPress: () => returnToStart() },
      { text: 'No' },
    ]);
  };
  return (
    <View style={styles.footer}>
      <Pressable onPress={handleReturn}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    borderTopWidth: 1,
    paddingLeft: '2%',
  },
});
