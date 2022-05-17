// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Map from './src/screens/Map';
import RegistrationCategory from '~/screens/RegistrationCategory';
import RegistrationInfo from '~/screens/RegistrationInfo';
import UserScreen from '~/screens/UserScreen';
import LoginScreen from '~/screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TOOK"
          component={Main}
          options={{
            title: 'TOOK',
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegistrationCategory"
          component={RegistrationCategory}
          options={{
            title: '쓰레기통 등록하기',
          }}
        />
        <Stack.Screen
          name="RegistrationInfo"
          component={RegistrationInfo}
          options={{
            title: '쓰레기통 등록하기',
          }}
        />
        <Stack.Screen name="User" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
