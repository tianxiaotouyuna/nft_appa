import { NFTRequest, OpenseRequest } from "@/request/index";
import jquery from "@/utils/jquery";

/**
 * 获取NFT详情
 */
export const createBuyOrder =  async ( data?:any ) => {
  // path?: any, params: any
  const path=data?.path
  const params=data?.params

  const api = `createBuyOrder/${!!path ? `${jquery.path(path)}` : ""}`;
  const res = await OpenseRequest.get(api, params);
  return res;
};
