import { NFTRequest } from "@/request/index";
import jquery from "@/utils/jquery";

/**
 * 获取NFT详情
 */
export const queryCollectionList = (path?: any, data: any) => {
  const api = `queryCollectionList/${!!path ? `${jquery.path(path)}` : ""}`;
  return NFTRequest.get(api, data);
};