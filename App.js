import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import SplashScreen from './Components/SplashScreen';
import BottomNavigator from './navigation/BottomNavigator';
import InfoMovieScreen from './src/InfoMovieScreen';
import AddMovieScreen from './src/AddMovieScreen';
import EditMovieScreen from './src/EditMovieScreen';
import {Provider as MovieProvider} from './context/MovieContext';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="EditMovieScreen" component={EditMovieScreen} />

        <Stack.Screen name="AddMovieScreen" component={AddMovieScreen} />

        <Stack.Screen name="HomeScreen" component={BottomNavigator} />
        <Stack.Screen name="InfoMovieScreen" component={InfoMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <MovieProvider>
      <App />
    </MovieProvider>
  );
};
