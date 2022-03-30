import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import NewRequest from '../../screens/NewRequest';
import SearchReceipient from '../../screens/SearchRecipient';
import WelcomeSlider from '../../screens/WelcomeSlider';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode:false}} >
      <Stack.Screen name="WelcomeSlider" component={WelcomeSlider} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewRequest" component={NewRequest} />
      <Stack.Screen name="SearchReceipient" component={SearchReceipient} />
    </Stack.Navigator>
  );
}