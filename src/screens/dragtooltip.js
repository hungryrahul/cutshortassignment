import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utilities/colors';

const DragToolTip = ({
    params,
}) => (
    <View style={style.tooltip} />
);
const style=StyleSheet.create({
    tooltip:{ height: '20%',
     paddingHorizontal: 30,
      backgroundColor: colors.dragtipblue,
       borderRadius: 30 }
})
export default DragToolTip;
