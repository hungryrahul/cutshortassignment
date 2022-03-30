import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PageIndication = ({
    currentIndex=0,
}) => {
  
    return(
    <View style={{flexDirection:'row',marginTop:10}}>
        {Array(3).fill('').map((item,index)=><View style={[style.indicatorStyle,currentIndex==index&&[style.largeindicator],currentIndex>=index&&[style.activeIndicator]]}/>)}
    </View>
);}

const style=StyleSheet.create({
    indicatorStyle:{
        height:7,
        width:20,
        backgroundColor:'#FDD590',
        borderRadius:20,
        marginLeft:5
    },
    activeIndicator:{
        backgroundColor:'#FFB129',
       
    },
    largeindicator:{
        width:35
    }
})

export default PageIndication;
