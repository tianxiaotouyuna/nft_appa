
import Axios, { AxiosRequestConfig, Method } from "axios";
import dayjs from "dayjs";
import { Storage } from "@/utils/index";
import Constants, { CacheKeys } from "@/constants/index";
import jquery from "@/utils/jquery";
import { assign } from "lodash";
import { Alert, Platform } from "react-native";

const DEFAULT_TIMEOUT = 50000;

const instance = Axios.create({
    baseURL: Constants.BASE_OPENSEA_HOST,
    timeout: DEFAULT_TIMEOUT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'merchant': Constants.MERCHANT,
        'os': Platform.OS,
    }
});

// // 拦截请求处理
// instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
//     return Promise.resolve(config);
// }, (error: any) => {
//     return Promise.reject(error);
// });

// // 拦截响应处理
// instance.interceptors.response.use(async (response: any) => {
//     return Promise.resolve(response);
// }, (error: any) => {
//     return Promise.reject(error)
// });

export const getUrl = (api: string, data?: any) => {
    api = Constants.BASE_OPENSEA_HOST+api
    return api;
}

const json = async (api: string, data: any = {}, config?: AxiosRequestConfig) => {
    api=getUrl(api,data)
    const resp: any = await instance.get('https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20', config);
    if (resp?.code === 0) {
        Alert.alert(JSON.stringify(resp?.data))
        return Promise.resolve(resp?.data);
    } else {
        Alert.alert(JSON.stringify(resp?.data))
        return Promise.reject(resp);
    }
}


export const get = (api: string, data?: any, config?: AxiosRequestConfig) => {
    return json(api, data, config);
}

export const post = (api: string, data?: any, config?: AxiosRequestConfig) => {
    return json(api, data, config);
}