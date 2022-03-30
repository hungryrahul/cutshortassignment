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
const HomeScreen = ({
    params,navigation
}) => {
    const [isOpen,setIsOpen] = useState(false)
    const listItem = ({ item, index }) => {
        return (
            <View style={{ height: getHeight(110),alignItems:'center',flexDirection:'row', width: '100%', backgroundColor: (index + 1) % 2 == 0 ? 'transparent' : '#192259',paddingVertical:10 }}>
                <View style={{ width: '25%', height: '100%',justifyContent:'center' }}>
                    <Image style={{width:'70%',height:'70%',alignSelf:'center'}} source={item.image} resizeMode='contain'/>
                </View>
                <View style={{ width: '50%', height: '100%',alignItems:'flex-start',justifyContent:'space-evenly'}}>
                    <Text style={style.listtext}>{item.name}</Text>
                    <Button image={item.icon} imagestyle={{height:getHeight(16),width:getHeight(16),marginHorizontal:5}} style={{backgroundColor:item.color,flexDirection:'row',paddingHorizontal: 8,borderRadius:20,alignItems:'center'}} textStyle={{fontSize:12,fontFamily:fonts.InterMedium}} text={item.status} />
                </View>
                <View style={{ width: '25%', height: '100%',justifyContent:'center' }}>
                <Text style={[style.listtext,{color:item.color}]}>{'₦ '+item.amount}</Text>
                </View>
            </View>
        )
    }

    return (
        <MainWrapper style={style.maincontainer}>
            {/* ============================================= HEADER ======================================  */}
            <View style={{flex:1}}>
            <Header onPressRight={()=>navigation.navigate('SearchReceipient')} left={true} image={images.burger} right={true} rightbtntext={'Add Money'} title='Hello Sandra,'/>                
            </View>
            {/* ============================================= MIDDLE AMOOUNT VIEW ======================================  */}
            <View style={{ flex: 2, paddingHorizontal: 10, justifyContent: 'space-evenly' }}>
                <View>
                    <Text style={style.amounttetx}>Your current balance is</Text>
                    <Text style={style.amount}>₦ 200,000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Button onPress={()=>navigation.navigate('NewRequest')} style={style.moneybutton} textStyle={style.moneybtntext} text='Request Money' />
                    <Button onPress={()=>setIsOpen(!isOpen)} style={style.moneybutton} textStyle={style.moneybtntext} text=' Send Money ' />
                </View>
            </View>
            {/* ============================================= BOTTOM LIST VIEW ======================================  */}
            <View style={{ flex: 4 }}>
                <View style={style.listview}>
                    <View style={{ flex: .07, alignItems: 'center', justifyContent: 'center' }}>
                        <DragToolTip />
                    </View>
                    <View style={{ flex: .13, justifyContent: 'center', paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.moneybtntext, { color: colors.white }]}>All Transactions</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[style.moneybtntext, { color: colors.white, fontSize: 14 }]}>Sort by: </Text>
                                <Text style={[style.moneybtntext, { fontSize: 14 }]}>Recent </Text>
                                <Icon name='chevron-small-down' size={20} color={'white'} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: .8 }}>
                        <FlatList
                            data={homelistdata}
                            renderItem={listItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
            <CustomModal isOpen={isOpen} setIsOpen={(value)=>setIsOpen(value)}/>
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
        borderTopEndRadius: 30
    },
    listtext:{
        fontSize:16,
        fontFamily:fonts.InterBold,
        color:colors.listblue
    }

})
export default HomeScreen;
