import { UIELEMENTS } from "@/constants/index";
import { pxToDp, pxToSp } from "@/utils/system";
import { StyleSheet } from "react-native";
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: UIELEMENTS.DEFAULT_BACKGROUND_COLOR,
        paddingHorizontal: pxToDp(40),
        paddingVertical: pxToDp(24),
    }
  
})

export default styles;
