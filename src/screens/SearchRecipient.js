import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import Button from '../component/Button';
import Header from '../component/Header';
import MainWrapper from '../component/MainWrapper';
import { colors } from '../utilities/colors';
import { homelistdata } from '../utilities/constants';
import { getHeight, getWidth } from '../utilities/dimesions';
import { fonts } from '../utilities/fonts';
import { images } from '../utilities/images';
import { commanstyles } from '../utilities/style';
import DragToolTip from './dragtooltip';

import CustomModal from '../component/CustomModal';
const SearchReceipient = ({
    params, navigation
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MainWrapper style={style.maincontainer}>
            {/* ============================================= HEADER ======================================  */}
            <View style={{ flex: 1 }}>
                <Header leftpress={()=>navigation.pop()} icon={true} right={false} left={true} lefttext='Back' input={true} />
            </View>
            {/* ============================================= MIDDLE AMOOUNT VIEW ======================================  */}
            <View style={{ flex: 3, paddingHorizontal: 10, justifyContent: 'space-evenly' }}>

            </View>
            {/* ============================================= BOTTOM LIST VIEW ======================================  */}
            <View style={{ flex: 3 }}>
                <View style={style.listview}>
                    <View style={{ flex: .2, alignItems: 'center', justifyContent: 'center' }}>
                        <DragToolTip />
                    </View>
                    <Image source={images.person1} style={{ height: getWidth(72), width: getWidth(72), alignSelf: 'center' }} resizeMode='contain' />

                    <Text style={[style.text, { fontSize: 20, fontFamily: fonts.InterMedium }]}>Adeleke Adeyanju</Text>
                    <Text style={[style.text, { fontSize: 14, fontFamily: fonts.InterLight }]}>(+234) 905 1694 275</Text>
                    <Button text='Continue' textStyle={{ color: colors.white3, fontSize: 16 }} style={[style.btn, { borderWidth: 1, backgroundColor: colors.pink }]} />
                </View>
            </View>
            <CustomModal isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
        </MainWrapper>
    );
}
const style = StyleSheet.create({
    maincontainer: {
        flex: 7,
        backgroundColor: colors.mainbackgroundcolor,
        paddingHorizontal: 10
    },
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
    moneybutton: {
        backgroundColor: colors.mainbackgroundcolor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.borderblue,
        width: getWidth(160),
        height: getHeight(60),
        justifyContent: 'center'
    },
    moneybtntext: {
        color: colors.borderblue,
        fontSize: 16,
        fontFamily: fonts.InterMedium
    },
    amount: {
        color: colors.white,
        fontSize: 40,
        fontFamily: fonts.InterSemiBold,
        marginVertical: 5
    },
    amounttetx: {
        color: colors.white,
        fontSize: 12,
        fontFamily: fonts.InterRegular
    },
    listview: {
        backgroundColor: colors.modalbackblue,
        flex: 10,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    listtext: {
        fontSize: 16,
        fontFamily: fonts.InterBold,
        color: colors.listblue
    },
    text: {
        color: colors.white,
        fontFamily: fonts.InterBold,
        fontSize: 40
    },
    btn: {
        width: getHeight(173),
        height: getHeight(60),
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})
export default SearchReceipient;
