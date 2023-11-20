import { View, Text, Modal, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { bottomSheetVisible, defaultLayoutState, levelState } from '@recoil/RootState';
import { useRecoilState } from 'recoil';
import { BottomSheetProps } from '@game/interfaces';
import { AntDesign } from '@expo/vector-icons';
import Space from '@common/widgets/Space';

function BottomSheet({ resetGame }: BottomSheetProps) {
  const [visible, setVisible] = useRecoilState(bottomSheetVisible);
  const [layout] = useRecoilState(defaultLayoutState);
  const [level, setLevel] = useRecoilState(levelState);

  const styles = StyleSheet.create({
    container: {
      height: layout.height,
      justifyContent: 'flex-end',
    },
    shade: {
      width: layout.width,
      height: (layout.height / 3) * 2,
      backgroundColor: 'black',
      opacity: 0.4,
    },
    sheet: {
      width: '100%',
      height: layout.height / 2,
      backgroundColor: 'white',
      paddingLeft: layout.height / 40,
      paddingBottom: layout.height / 40,
      justifyContent: 'space-evenly',
    },
    section: {
      width: layout.width * 0.9,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
    },
  });

  return (
    <View>
      <Modal animationType="none" transparent={true} visible={visible}>
        <View style={styles.container}>
          <Pressable style={styles.shade} onPress={() => setVisible(false)} />
          <View style={styles.sheet}>
            <Text style={styles.title}>게임을 재시작하시려면 난이도를 선택해주세요.</Text>
            <TouchableOpacity style={styles.section} onPress={() => setLevel('Beginner')}>
              {level === 'Beginner' && (
                <View style={styles.row}>
                  <AntDesign name="checksquare" size={24} color="black" />
                  <Space dir="col" size={10} />
                </View>
              )}
              <Text>Beginner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => setLevel('Intermediate')}>
              {level === 'Intermediate' && (
                <View style={styles.row}>
                  <AntDesign name="checksquare" size={24} color="black" />
                  <Space dir="col" size={10} />
                </View>
              )}
              <Text>Intermediate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={() => setLevel('Expert')}>
              {level === 'Expert' && (
                <View style={styles.row}>
                  <AntDesign name="checksquare" size={24} color="black" />
                  <Space dir="col" size={10} />
                </View>
              )}
              <Text>Expert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section} onPress={resetGame}>
              <Text>다시 시작하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomSheet;
