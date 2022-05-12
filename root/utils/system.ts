import { Dimensions, PixelRatio, Platform } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
const uiWidth = 750;
const uiHeight = 1334;

// const scale = Math.min(windowHeight / uiHeight, windowWidth / uiWidth);
const windowWidthPx = PixelRatio.getPixelSizeForLayoutSize(windowWidth);
const windowHeightPx = PixelRatio.getPixelSizeForLayoutSize(windowHeight);
const scalePx = Math.min(windowHeightPx / uiHeight, windowWidthPx / uiWidth);

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

export const pxToSp = (value: number) => {
    const scaleWidth = windowWidth / uiWidth;
    const scaleHeight = windowHeight / uiHeight;
    const scale = Math.min(scaleWidth, scaleHeight);
    return Math.round(value * scale / fontScale + 0.5);
}

export const pxToDp = (value: number) => {
    if (!value) {
        return 0;
    }
    return Math.round((value * scalePx) / pixelRatio + 0.5);
}

/** 等待时长（秒） */
export const awaitTime = (duration: number) => {
    return new Promise((resolve) => {
        const time: any = setTimeout(() => resolve(time), duration * 1000);
    })
}

export const checkPhone=(phone: string)=>{ 
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){ 
        // alert("手机号码有误，请重填");  
        return false; 
    } 
    else return true;
}