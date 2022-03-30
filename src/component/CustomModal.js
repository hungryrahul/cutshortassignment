import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Entypo';
import Iicon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utilities/colors';
import { getHeight } from '../utilities/dimesions';
import { fonts } from '../utilities/fonts';
import Button from './Button';
const CustomModal = ({
    params, isOpen = false, setIsOpen = Function()
}) => {
    function numKey(){
        return Array(12).fill('').map((i,k)=>{
            const keynum=k+1
            const keypad_value=keynum==11?'0':keynum==10?'.':keynum
            return(
                <TouchableOpacity style={{height:'25%',width:'33%',justifyContent:'center'}}>
                    {keypad_value==12?
                    <Iicon name='md-backspace' size={30} style={{alignSelf:'center'}} color={colors.white}/>
                    :
                    <Text  style={[styles.input,{alignSelf:'center',fontSize:24}]}>{keypad_value}</Text>}
                </TouchableOpacity>
            )
        })
    }
    return(
    <Modal isVisible={isOpen} style={styles.view} >
        <View style={styles.main}>
            <View style={styles.closebtn}>
                <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => setIsOpen(!isOpen)}>
                    <Icon name='cross' color={'black'} size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 10 }}>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <TextInput keyboardType={'number-pad'} value={'₦ 0.00'} style={styles.input} />
                </View>
                <View style={{ flex: 5,flexDirection:'row',flexWrap:'wrap' }}>
                        {numKey()}
                </View>
                <View style={{ flex: 2,justifyContent:'center' }}>
                <Button onPress={() => setIsOpen(!isOpen)} text='Send Money' textStyle={{color:colors.white3,fontSize:16}} style={[styles.btn,{borderWidth:1,backgroundColor:colors.pink}]}/>
                </View>
            </View>
        </View>
    </Modal>
);}
const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    main: {
        flex: .9,
        backgroundColor: colors.mainbackgroundcolor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closebtn: {
        alignSelf: "center",
         position: 'absolute',
          top: -40,
           backgroundColor: 'white',
            borderRadius: 100
    },
    input: { alignSelf: "center",
     color: colors.white,
      fontFamily: fonts.InterBold,
       fontSize: 40 },
       btn:{
        width:getHeight(173),
        height:getHeight(60),
       alignSelf:'center',
       justifyContent:'center',
       borderRadius:10
    }
});
export default CustomModal;
