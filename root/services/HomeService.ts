import { NFTRequest } from "@/request/index";
import jquery from "@/utils/jquery";
import { Alert } from "react-native";

/**
 * 获取NFT详情
 */
export const queryCollectionList =  async ( data?:any ) => {
  const path=data?.path
  const params=data?.params
  const api = `queryCollectionList/${!!path ? `${jquery.path(path)}` : ""}`;
    const res = await NFTRequest.get(api, params);
    return res;
};
export const queryCollectionList2 =  async ( data?:any ) => {
    const path=data?.path
  const params=data?.params
  const api = `queryCollectionList/${!!path ? `${jquery.path(path)}` : ""}`;
  const res = await NFTRequest.get(api,params);
  var new_res = new Array();
  for (var i = 0; i < 10; i++) {
    var sub_arr = new Array();
    for (var j = 0; j < 2; j++) {
      sub_arr.push(res.data.collections[i * 2 + j]);
    }
    new_res.push(sub_arr);
  }
  res.cursor=res.data.next
  res.data = new_res;
  return res;
};
/**
 * 获取合集详情
 */
 
export const queryOneCollectInfo =  async ( data?:any ) => {
  // path?: any, params: any
  const path=data?.path
  const params=data?.params
  const api = `queryOneCollectInfo/${!!path ? `${jquery.path(path)}` : ""}`;
    const res = await NFTRequest.get(api, params);
    return res;
};
// /**
//  * 获取合集详情
//  */

 export const getCollectionStats =  async ( data?:any ) => {
  // path?: any, params: any
  const path=data?.path
  const params=data?.params
  const api = `getCollectionStats/${!!path ? `${jquery.path(path)}` : ""}`;
    const res = await NFTRequest.get(api, params);
    return res;
};
