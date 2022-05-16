import { pxToDp, pxToSp } from "@/utils/system";
import { StyleSheet } from "react-native";
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingTop:pxToDp(200)
    },
    ripple: {
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    spacing1: {
        margin: 12 
    },
    spacing2: {
        marginBottom: 12 
    },
    tab_right:{
        width:pxToDp(44),
        height:pxToDp(44),
        marginHorizontal:pxToDp(32)
    }
})

export default styles;
