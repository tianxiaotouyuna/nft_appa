import { NFTRequest } from "@/request/index"
import jquery from "@/utils/jquery"
import { Alert } from "react-native"

/**
 * 获取NFT资产列表
 */
export const getMarketList = async () => {
  const res=await NFTRequest.get('getMarketList/')
  console.log(JSON.stringify('res==='+JSON.stringify(res)))
  var new_res=new Array()
  for( var i=0;i<10;i++){
  var sub_arr=new Array()
      for(var j=0;j<2;j++){
        sub_arr.push(res.data.assets[i*2+j])
      }
      new_res.push(sub_arr)
  }
  res.data=new_res
  console.log(JSON.stringify('res==='+JSON.stringify(new_res)))
  return res
}
  /**
 * 获取NFT详情
 */
 export const getAssetsOneInfo = (path?: any,data:any) => {

  const api=`getAssetsOneInfo/${!!path ? `${jquery.path(path)}` : ""}`
    return NFTRequest.get(api,data)
  }

