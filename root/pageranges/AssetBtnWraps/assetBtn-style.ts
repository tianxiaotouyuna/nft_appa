import { UIELEMENTS } from "@/constants/index";
import { pxToDp, pxToSp } from "@/utils/system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-between",
        alignItems:"center",
        height:pxToDp(400),
        
    },
})

export default styles;
