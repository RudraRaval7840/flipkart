import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Feed from './Feed';
import Notification from './Notification';
import Setting from './Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Image source={require('../../assest/feed/home.png')} style={{height:25,width:25}}/>
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="bulb-outline" size={27} color='black'/>
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="notifications-outline" size={27} color='black'/>;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="settings-outline" size={27} color='black'/>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
