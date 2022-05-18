import { pxToDp } from "@/utils/system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding:pxToDp(6),
        backgroundColor: "#ffffff",
        borderColor:'#EEEEEE',
        borderWidth:pxToDp(1)
    }, 
    publish_image: {
        width:pxToDp(540),
        height:pxToDp(310),
    },
    hot_image: {
        width:pxToDp(320),
        height:pxToDp(200),
    },
    hot_head: {
        width:pxToDp(88),
        height:pxToDp(88),
        borderRadius: 100,
        marginTop:-pxToDp(44)
    },
})

export default styles;
