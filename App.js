import {View, Text} from 'react-native';
import React from 'react';
import LoginScreen from './src/screen/Navigation/Login';

import MobileNumScreen from './src/screen/Navigation/MobileNumScreen';
import OtpScreen from './src/screen/Navigation/OtpScreen';
import RegistrationScreen from './src/screen/Navigation/Register';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/screen/drawer/DrawerNavigator';
import Main from './src/screen/drawer/Main';
import Basmati from './src/screen/Navigation/Basmati';
import StaplesCorner from './src/screen/Navigation/StaplesCorner';
import Grocery from './src/screen/Navigation/Grocery';
import HomeScreen from './src/screen/Navigation/HomeScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MobileNumScreen"
          component={MobileNumScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basmati"
          component={Basmati}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StaplesCorner"
          component={StaplesCorner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Grocery"
          component={Grocery}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
