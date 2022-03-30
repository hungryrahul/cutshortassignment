import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native';
import Button from '../component/Button';
import Header from '../component/Header';
import MainWrapper from '../component/MainWrapper';
import { colors } from '../utilities/colors';
import { getHeight, getWidth } from '../utilities/dimesions';
import { fonts } from '../utilities/fonts';
import { images } from '../utilities/images';

const NewRequest = ({
    params,navigation
}) => (
        <MainWrapper style={style.maincontainer}>
            <ImageBackground style={{flex:7,paddingHorizontal:10}} source={images.money_request}>
            <View style={{flex:1,justifyContent:'center'}}>
            <Header leftpress={()=>navigation.pop()} titlestyle={style.title} icon={true} left={true} lefttext='Back' title='New Request'/>
            </View>
            <View style={{flex:6}}>
               <View style={{flex:4,alignItems:'center',justifyContent:"space-evenly"}}>
               <View style={{height:getWidth(200),width:getWidth(200)}}>
                    <ImageBackground source={images.image_back} style={{flex:1,justifyContent:'center'}}>
                        <Image source={images.person1} style={{flex:.5,alignSelf:'center'}} resizeMode='contain'/>
                    </ImageBackground>
                </View>
                <Text style={[style.text,{fontSize:24,fontFamily:fonts.InterMedium}]}>Adeleke Ramon</Text>
                <Text style={[style.text,{fontSize:14,fontFamily:fonts.InterLight}]}>is requesting for:</Text>
                <Text style={style.text}>₦ 200,000</Text>
               </View>
               <View style={{flex:2,justifyContent:"space-evenly"}}>
                    <Button text='Send Money' textStyle={{color:colors.white3,fontSize:16}} style={[style.btn,{borderWidth:1,backgroundColor:colors.pink}]}/>
                    <Button text={'Don\'t Send'} textStyle={{color:colors.borderblue,fontSize:16}} style={[style.btn,{borderWidth:1,borderColor:colors.borderblue}]}/>
               </View>
            </View>
            </ImageBackground>
        </MainWrapper>
);
const style = StyleSheet.create({
    maincontainer: {
        flex: 7,
        backgroundColor: colors.mainbackgroundcolor,
    },
    text:{
        color:colors.white,
        fontFamily:fonts.InterBold,
        fontSize:40
    },
    btn:{
        width:getHeight(173),
        height:getHeight(60),
       alignSelf:'center',
       justifyContent:'center',
       borderRadius:10
    },
    title:{color:colors.white2,textAlign:'left'}
})
export default NewRequest;
