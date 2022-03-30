import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../component/Button';
import MainWrapper from '../component/MainWrapper';
import PageIndication from '../component/PageIndication';
import { colors } from '../utilities/colors';
import { getHeight, getWidth } from '../utilities/dimesions';
import { fonts } from '../utilities/fonts';
import { images } from '../utilities/images';
const slides = [
    {
        images:images.slider1,
        textColor:colors.darktextcolor,
        btntextcolor:colors.lightbtntextcolor
    },
    {
        images:images.slider2,
        textColor:colors.lighttextcolor,
        btntextcolor:colors.darkbtntextcolor
    }
]
const WelcomeSlider = ({
    params,navigation
}) => {
    const [slideIndex,setSlideIndex] = useState(0)
    const onPressStartBanking = () =>{
        slideIndex<1? setSlideIndex((index)=>index+1):navigation.navigate('HomeScreen');
    }
    return(
  <MainWrapper style={{flex:1}}>
      <ImageBackground source={slides[slideIndex].images} resizeMode='cover'  style={{height:getHeight(812),width:getWidth(375),justifyContent:'flex-end'}}>
            <View style={[style.bottomWidget,{backgroundColor:slides[slideIndex].btntextcolor}]}>
                <View>
                    <PageIndication currentIndex={slideIndex}/>
                </View>
                <View style={{paddingVertical:10}}>
                    <Text style={[style.title,{color:slides[slideIndex].textColor}]}>Transfer That Is Safe</Text>
                    <Text style={[style.subtitle,{color:slides[slideIndex].textColor}]}>You have nothing to be scared about, we got you covered.</Text>
                </View>
                <View style={{alignItems:'flex-start'}}>
                   <Button textStyle={{color:slides[slideIndex].btntextcolor}} onPress={onPressStartBanking} text='Start Banking' style={[style.button,{backgroundColor:slides[slideIndex].textColor}]} />
                </View>
            </View>
      </ImageBackground>
  </MainWrapper>
);}
const style=StyleSheet.create({
    bottomWidget:{
        height:getHeight(240),
        width:getWidth(323),
        backgroundColor:'#17288E',
        borderTopRightRadius:70,
        borderWidth:1,
        paddingHorizontal:30,
        justifyContent:'center'
    },
    title:{
        fontSize:18,
        fontFamily:fonts.InterBold,
        color:colors.white,
        paddingVertical:10,
        
    },
    subtitle:{
        fontSize:16,
        fontFamily:fonts.InterMedium,
        color:colors.white,
        lineHeight:25
    },
    button:{
        height:getHeight(50),
        width:getWidth(145),
        backgroundColor:colors.white,
        borderRadius:10,
        justifyContent:'center'
    }
})
export default WelcomeSlider;
