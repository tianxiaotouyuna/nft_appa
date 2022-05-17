import { UIELEMENTS } from "@/constants/index";
import { pxToDp, pxToSp } from "@/utils/system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: UIELEMENTS.DEFAULT_BACKGROUND_COLOR,
        paddingHorizontal: pxToDp(40),
        paddingVertical: pxToDp(24),
    },
  
    search_wraps:{ borderColor: UIELEMENTS.DEFAULT_SUB_COLOR, borderWidth: pxToDp(0.5), borderRadius: pxToDp(10000), height: pxToDp(72), width: pxToDp(686), shadowOpacity: 0 },
    search_input:{ marginLeft: -10, fontSize: pxToSp(26), color: UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE, textAlignVertical: "center", flex: 1, height: pxToDp(100), alignSelf: "center" }
})

export default styles;
