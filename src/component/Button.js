import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { fonts } from '../utilities/fonts';

const Button = ({
    text='',style={},onPress=Function(),textStyle={},image='',imagestyle={}
}) => {
    
    return(
    <TouchableOpacity activeOpacity={.7} onPress={onPress} style={style}>
        {image?<Image style={imagestyle} source={image}/>:null}
        <Text style={[styles.text,textStyle]}>{text}</Text>
    </TouchableOpacity>
);}
const styles=StyleSheet.create({
    text:{
        fontSize:16,
        fontFamily:fonts.InterMedium,
        color:'white',
        lineHeight:25,
        alignSelf:'center'
    }
})
export default Button;
