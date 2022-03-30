import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import MyStack from './navigation/StackNavigation';

const App = ({
    params,
}) => (
    <NavigationContainer theme={DarkTheme}>
        <MyStack/>
    </NavigationContainer>
);

export default App;
