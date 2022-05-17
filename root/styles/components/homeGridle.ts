import { pxToDp, pxToSp } from "@/utils/system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: pxToDp(40),
        paddingVertical: pxToDp(24),
    },
   
    image: {
        width: pxToDp(560),
        height: pxToDp(784),
        // width: "100%",
        // height: "100%",
    },
    ripple: {
        flexDirection:"column",
        alignItems:"center"
    },
    text: {
        marginTop:pxToDp(6),
        fontSize:pxToSp(24),
        color:'#383838'
    },
})

export default styles;
