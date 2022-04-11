import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Image} from 'react-native';

import MyMoviesScreen from '../src/MyMoviesScreen';
import HomeScreen from '../src/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 0,
          height: 60,
        },
      }}
      tabBarBackground={'#191a1b'}
      tabBarOptions={{
        safeAreaInsets: {
          bottom: 0,
        },
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#191a1b',
        inactiveBackgroundColor: '#191a1b',
        style: {
          backgroundColor: '#191a1b',
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="movie-open-play-outline" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="MyMoviesScreen"
        component={MyMoviesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="movie-plus-outline" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
