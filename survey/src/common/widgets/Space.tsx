import { View, StyleSheet } from 'react-native';
import { SpaceProps } from '../interfaces';

function Space({ dir, size }: SpaceProps) {
  const styles = StyleSheet.create({
    space: {
      width: dir === 'col' ? size : 0,
      height: dir === 'row' ? size : 0,
    },
  });
  return <View style={styles.space} />;
}

export default Space;
