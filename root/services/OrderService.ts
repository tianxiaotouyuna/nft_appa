import { NFTRequest } from "@/request/index";
import jquery from "@/utils/jquery";
import { Alert } from "react-native";

/**
 * 获取NFT详情
 */
export const selectOfferList =  async ( data?:any ) => {
  // path?: any, params: any
  const path=data?.path
  const params=data?.params

  const api = `selectOfferList/${!!path ? `${jquery.path(path)}` : ""}`;
  const res = await NFTRequest.get(api, params);
  // Alert.alert(JSON.stringify(res))
  return res;
};
