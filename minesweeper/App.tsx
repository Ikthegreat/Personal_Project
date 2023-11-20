import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';

import RootStack from './src/navigator/RootStack';

export default function App() {
  return (
    <RecoilRoot>
      <StatusBar style="auto" />
      <RootStack />
    </RecoilRoot>
  );
}
