import { View, Text, StyleSheet } from 'react-native';

function Page() {
  return (
    <View style={styles.page}>
      <Text>페이지</Text>
    </View>
  );
}

export default Page;

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
