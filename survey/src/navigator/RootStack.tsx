import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './interfaces';

import Start from '@start/Start';
import Survey from '@survey/Survey';
import Preview from '@preview/Preview';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
