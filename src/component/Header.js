import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../utilities/colors';
import { fonts } from '../utilities/fonts';
import { commanstyles } from '../utilities/style';
import Button from './Button';

const Header = ({
    image = '', icon = '', title = '', right = false, rightbtntext = '', left = false, lefttext = '', titlestyle = {}, leftpress = Function(), onPressRight = Function(), input = false
}) => (
    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: right?'space-evenly':"flex-start", flex: 1 }}>
        {left ? <View style={{ width: '20%' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }} onPress={leftpress}>{image ? <Image source={image} resizeMode='contain' /> : null}
                {icon ? <Icon name='chevron-left' size={30} color={colors.white2} /> : null}
                {lefttext ? <Text style={[style.addbtntext, { fontSize: 12, color: colors.white2, paddingHorizontal: 0 }]}>{lefttext}</Text> : null}
            </TouchableOpacity>
        </View> : null}
        {title ? <View style={[{ width: right?'45%':'60%',alignItems:right?'flex-start':'center'}]}>
            <Text style={[commanstyles.title, titlestyle]}>{title}</Text>
        </View> : null}

        {right ?
            <View style={{ width: '25%' }}>
                <Button onPress={onPressRight} style={style.addbutton} textStyle={style.addbtntext} text={rightbtntext} />
            </View>
            : null}
        {input ?
            <View style={style.inputview}>
                <TextInput style={{ color: colors.white, paddingHorizontal: 10, fontFamily: fonts.InterThin }} />
            </View>
            : null}

    </View>
);
const style = StyleSheet.create({

    addbutton: {
        backgroundColor: colors.btnbackBlue,
        borderRadius: 5
    },
    addbtntext: {
        color: colors.btntextblue,
        fontSize: 12,
        fontFamily: fonts.InterLight,
        paddingHorizontal: 5
    },
    inputview: {
        width: '80%', borderWidth: .5, borderRadius: 10, backgroundColor: colors.modalbackblue, borderColor: colors.gray
    }

})
export default Header;
