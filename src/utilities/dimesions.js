import { Dimensions, StatusBar } from "react-native";

const screenHeight=Dimensions.get('window').height
const screenWidth=Dimensions.get('window').width
const statusbarheight=StatusBar.currentHeight
export const getHeight = (viewreferenceheight) =>{
        const totalreferenceheight= 812;
        const result = (viewreferenceheight/totalreferenceheight)*screenHeight
    return result
}

export const getWidth = (viewreferencewidth) =>{
    const totalreferencewidth= 375;
    const result = (viewreferencewidth/totalreferencewidth)*screenWidth
    return result
}