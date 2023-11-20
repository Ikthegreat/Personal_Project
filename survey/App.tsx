import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import RootStack from '@navigator/RootStack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function App() {
  return (
    <RecoilRoot>
      <RootStack />
      <StatusBar style="auto" />
    </RecoilRoot>
  );
}

export default gestureHandlerRootHOC(App);
