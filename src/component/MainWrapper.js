import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../utilities/colors';

const MainWrapper = (params) => {
    const {style,children} = params
    return(
    <SafeAreaView style={style}>
        <StatusBar backgroundColor={colors.mainbackgroundcolor}/>
        {children}
    </SafeAreaView>
);
}

export default MainWrapper;
