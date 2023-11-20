import { defaultLayoutState } from '@recoil/RootState';
import { CreateSurveyProps } from '@start/interface';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';

function CreateSurvey({ onPress }: CreateSurveyProps) {
  const [layout] = useRecoilState(defaultLayoutState);

  const styles = StyleSheet.create({
    container: {
      width: layout.width / 2,
      height: layout.height / 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'lightgray',
    },
    image: {
      width: (layout.width / 2) * 0.99,
      height: (layout.height / 5) * 0.99,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../../../common/assets/forms-blank-googlecolors.png')}
        />
      </Pressable>
    </View>
  );
}

export default CreateSurvey;
