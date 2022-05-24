import { NFTRequest } from "@/request/index"
import jquery from "@/utils/jquery"
import { Alert } from "react-native"

/**
 * 获取NFT资产列表
 */
export const getMarketList = async () => {
  const res=await NFTRequest.get('getMarketList/')
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
  export const getMarketList2 = (params?: any) => {

    return {
        "msg": "操作成功",
        "code": 200,
        "data": [
          [{
            "id": 440821083,
            "imageUrl": 'https://img0.baidu.com/it/u=940732863,1808085947&fm=253&fmt=auto&app=138&f=JPEG?w=553&h=500',
            "tokenId": "51155626847932538964005676839147869416091349697233307241626733179541737439233",
            "assetName": '悟空来了',
            "assetAddress": "0x495f947276749ce646f68ac8c248420045cb7b5e",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": '0.1131 ETH'
          },
          {
            "id": 440821082,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2Fbe8ac782j00r0s6ur000vc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886615&t=92429f76e923e99c6056a5fee02ebfd6',
            "tokenId": "3876",
            "assetName": '油画',
            "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": '0.0021 ETH'
          }],
          [{
            "id": 440821080,
            "imageUrl": 'https://img0.baidu.com/it/u=590006338,1231462113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            "tokenId": "3317",
            "assetName": '猴哥来玩了',
            "assetAddress": "0x46b95a569ef932adc1ebe0000727035ee1f2da75",
            "collectionName": "Eth.r Brews Generative Collection",
            "salePrice": '0.0021 ETH'
          },
          {
            "id": 440821079,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
            "tokenId": "2814",
            "assetName": '战争之下',
            "assetAddress": "0x11ca9693156929ee2e7e1470c5e1a55b413e9007",
            "collectionName": "Psychedelics Anonymous Psilocybin",
            "salePrice": '0.0021 ETH'
          }],
          [{
            "id": 440821077,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
            "tokenId": "3873",
            "assetName": null,
            "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": '0.1131 ETH'
          },
          {
            "id": 440821076,
            "imageUrl": 'https://img0.baidu.com/it/u=590006338,1231462113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            "tokenId": "3879",
            "assetName": null,
            "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": '0.0021 ETH'
          }],
          [{
            "id": 440821073,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2Fbe8ac782j00r0s6ur000vc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886615&t=92429f76e923e99c6056a5fee02ebfd6',
            "tokenId": "3864",
            "assetName": null,
            "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": 'Impossible Block#2124'
          },
          {
            "id": 440821072,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
            "tokenId": "3881",
            "assetName": null,
            "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": '0.1131 ETH'
          }],
          [{
            "id": 440821071,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2Fbe8ac782j00r0s6ur000vc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886615&t=92429f76e923e99c6056a5fee02ebfd6',
            "tokenId": "21269221605813514809481462890651808057441306200692816149898726332250211712452",
            "assetName": null,
            "assetAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
            "collectionName": "ENS: Ethereum Name Service",
            "salePrice": '0.0021 ETH'
          },
          {
            "id": 440821070,
            "imageUrl": 'https://img0.baidu.com/it/u=940732863,1808085947&fm=253&fmt=auto&app=138&f=JPEG?w=553&h=500',
            "tokenId": "3875",
            "assetName": null,
            "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
            "collectionName": "THE TATTOO ARTIST",
            "salePrice": '0.0021 ETH'
          }],
          [{
            "id": 440821067,
            "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
            "tokenId": "105796204734605626712023685081731545537107694952405135557134397778624654289028",
            "assetName": null,
            "assetAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
            "collectionName": "ENS: Ethereum Name Service",
            "salePrice": '0.1131 ETH'
          }],
        
      
        ]
      }
}

  /**
 * 获取NFT详情
 */
 export const getAssetsOneInfo = (path?: any,data:any) => {

  const api=`getAssetsOneInfo/${!!path ? `${jquery.path(path)}` : ""}`
    return NFTRequest.get(api,data)
  }

  
 export const getAssetsOneInfo2 = (path?: any,data:any) => {
  return{
    "msg": "操作成功",
    "code": 200,
    "data": {
      "id": 436980817,
      "imageThumbnailUrl": "https://lh3.googleusercontent.com/jVrhev0fcxzAgG-aAmdO_lahoL4_ZAkk7XE6-tTDy8nzDkV-k_dEF52oYx26tlxg7IrjpsoT5SNLdrsFX5BnsiirW5bBOwakxStRIA=s128",
      "imagePreviewUrl": "https://lh3.googleusercontent.com/jVrhev0fcxzAgG-aAmdO_lahoL4_ZAkk7XE6-tTDy8nzDkV-k_dEF52oYx26tlxg7IrjpsoT5SNLdrsFX5BnsiirW5bBOwakxStRIA=s250",
      "profileImgUrl": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
      "description": "\"I still believe that the greatest  \npainters painted figures ..  \nI paint the light that emanates  \nfrom all bodies. Erotic works  \nof art are also sacred.\"  \n-Egon Schiele, 1911",
      "tokenId": "7",
      "imageUrl": "https://lh3.googleusercontent.com/jVrhev0fcxzAgG-aAmdO_lahoL4_ZAkk7XE6-tTDy8nzDkV-k_dEF52oYx26tlxg7IrjpsoT5SNLdrsFX5BnsiirW5bBOwakxStRIA",
      "assetName": "ULTRA LIGHT 2022 SABET",
      "collectionName": "Sabet",
      "schemaName": "ERC1155",
      "totalSupply": null,
      "followNum": 0,
      "topOwnerships": [
        {
          "owner": {
            "address": "0xaab79be56443fb92045ca69b15942214162ff814",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/5.png",
            "user": {
              "username": "pixopop"
            },
            "config": ""
          },
          "quantity": "3"
        },
        {
          "owner": {
            "address": "0xfa639ba57ad35d63688a9ba0fa7d89b79699ea5e",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/3.png",
            "user": {
              "username": "Stash911"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0x21e4383a89bdf87baad2ef61254ff7197c235adf",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/6.png",
            "user": {
              "username": "DrkNFT85"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0x429dd32cfe14e41235ec3dd32682c5437fef8448",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/27.png",
            "user": {
              "username": "KWpro"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0xe2acfa2f1c3dca055899caf07cde854f49f8d8fa",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/5.png",
            "user": {
              "username": "Buffoonery"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0x308ce6c29f1de9792e630816499f3a32318ef1e1",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/20.png",
            "user": {
              "username": "MarsOne"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0x8905ee4bc06c5b6db46ca90ec9bab73b6201c0e4",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": {
              "username": "drinkyouroj"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0xbafe7ba26f5df52882c48fbbee0a7a9d1a298c51",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/31.png",
            "user": {
              "username": "Masosim"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0x8ea64a03eb746968703d3b8c88cd0808654db653",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/33.png",
            "user": {
              "username": "abovethelaws"
            },
            "config": ""
          },
          "quantity": "1"
        },
        {
          "owner": {
            "address": "0x005018f9716f7c617c183fc3b4dd0eb17f72edc3",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/16.png",
            "user": {
              "username": "kramrogNL"
            },
            "config": ""
          },
          "quantity": "1"
        }
      ],
      "creatorAddress": "0x02eb75be1e72e988de64f0088d654d8ea1081e87",
      "orderList": [
        {
          "closing_date": "2022-06-19T17:53:30",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0xc04c7af9f54821e2efc9676a6ace8190bbb9d729e0cb7cd886e73e1353a100a0",
          "taker_protocol_fee": "0",
          "listing_time": 1652982716,
          "extra": "0",
          "base_price": "1000000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "59743727839742501715522569809434912226296895498018069716622960630219762265418",
          "expiration_time": 1655661210,
          "maker": {
            "address": "0x8ea64a03eb746968703d3b8c88cd0808654db653",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/33.png",
            "user": 1266764,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0xc04c7af9f54821e2efc9676a6ace8190bbb9d729e0cb7cd886e73e1353a100a0",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "10000000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0xe35a8fce1817ceff79f3e4a5b9244d66b3550b6f4ba5b921333ddae5f8a69bd9",
          "s": "0x6470458d70301c03db3ce9d61782780db793e21eaaba6d0ec9b59a1ffd1830b9",
          "fee_method": 1,
          "calldata": "0x96809f900000000000000000000000008ea64a03eb746968703d3b8c88cd0808654db65300000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 27,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-19T17:53:39.574385",
          "current_price": "1000000000000000000.000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-06-20T05:26:17",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0x88803d7b84d2b5e216f711a3f681943bd58767ce6cf55493f523816dcb0b8cc3",
          "taker_protocol_fee": "0",
          "listing_time": 1653024301,
          "extra": "0",
          "base_price": "399000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "62654055640402243221221967801520418536447040022846379472558156640452009732800",
          "expiration_time": 1655702777,
          "maker": {
            "address": "0x8a1e60974457ebd606926365ea87a87cc5d46d4b",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/4.png",
            "user": 15982831,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x88803d7b84d2b5e216f711a3f681943bd58767ce6cf55493f523816dcb0b8cc3",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "3990000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x3a85349ad6cc86392f1a691c6c302ded656a4fa4de69749344451fdce8f1abba",
          "s": "0x2b69f11301bd997c7057ba38d2ee76b31e67bb77d8c6ed84e0c731c2343ac50c",
          "fee_method": 1,
          "calldata": "0x96809f900000000000000000000000008a1e60974457ebd606926365ea87a87cc5d46d4b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 27,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-20T05:26:53.628227",
          "current_price": "399000000000000000.0000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-05-23T04:52:50",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0x7cfcfe98fd9fb5c3b81ee4fc8b31275ed8b5936f708460aba031c75dafaaa369",
          "taker_protocol_fee": "0",
          "listing_time": 1653022320,
          "extra": "0",
          "base_price": "500000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "70828938515090789685856152924696339279437640434919647142186511591872468862512",
          "expiration_time": 1653281570,
          "maker": {
            "address": "0x990450d56c41ef5e7d818e0453c2f813feb9448a",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
            "user": 2380846,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x7cfcfe98fd9fb5c3b81ee4fc8b31275ed8b5936f708460aba031c75dafaaa369",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "5000000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x9123c79353d43eed8c42a25f5441148db8073e499d322cdea7e99f05d0429a6a",
          "s": "0x2d8e74d1c11e94f691aac843c69dceefc3a152d821ce71a20e7c274dc6ca45e3",
          "fee_method": 1,
          "calldata": "0x96809f90000000000000000000000000990450d56c41ef5e7d818e0453c2f813feb9448a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 28,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-20T04:53:51.731717",
          "current_price": "500000000000000000.0000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-06-19T05:11:16",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0xae7b653fc7755ec801235ddd2e5053cfec267a51dccdeef09ad800c9e33a0c17",
          "taker_protocol_fee": "0",
          "listing_time": 1652936995,
          "extra": "0",
          "base_price": "780000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "25975513284412257537565791905982304998838688051262814690766084181050202376637",
          "expiration_time": 1655615476,
          "maker": {
            "address": "0x8a1e60974457ebd606926365ea87a87cc5d46d4b",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/4.png",
            "user": 15982831,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0xae7b653fc7755ec801235ddd2e5053cfec267a51dccdeef09ad800c9e33a0c17",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "7800000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0xc971baa88daf9b3c3376bc4ab0f18636b901fdd7381b907efade640806d83f31",
          "s": "0x31ca93e3dab653934301c77ea6606ee4feba716c53148032ae1f7da03e4c9556",
          "fee_method": 1,
          "calldata": "0x96809f900000000000000000000000008a1e60974457ebd606926365ea87a87cc5d46d4b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 28,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-19T05:12:10.858228",
          "current_price": "780000000000000000.0000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-05-21T19:59:04",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "taker_relayer_fee": "1250",
          "order_hash": "0x4466979f24ab32907bc6187dbca57aaadca0177cf7fb9917229a90271bfce59d",
          "taker_protocol_fee": "0",
          "listing_time": 1652903862,
          "extra": "0",
          "base_price": "24000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 0,
          "quantity": "1",
          "salt": "43115618779254831585919011153181386048443088433069660576676162273446314158752",
          "expiration_time": 1653163144,
          "maker": {
            "address": "0x11ff1ad7ca4ef29ecfd61b90551d5a6a8d27821a",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/14.png",
            "user": 155202,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x4466979f24ab32907bc6187dbca57aaadca0177cf7fb9917229a90271bfce59d",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "240000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "WETH",
            "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "image_url": "https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg",
            "decimals": 18,
            "name": "Wrapped Ether",
            "usd_price": "2022.460000000000036000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x2f96bc40a981113e6ad7a32262859e52b2f9809a8c74d649df45c717efe90917",
          "s": "0x6426b78f95b19e86fbc88f59956b2b59fbeb3880892d6990e0fb7e3101c35ae3",
          "fee_method": 1,
          "calldata": "0x96809f90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011ff1ad7ca4ef29ecfd61b90551d5a6a8d27821a0000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 28,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-18T19:59:24.281990",
          "current_price": "24000000000000000.00000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "0",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-05-23T04:52:50",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0x4cc425b0c91413a6cc4919e4fc2cb5b9204362462a516f1095f8c917f1bc23f6",
          "taker_protocol_fee": "0",
          "listing_time": 1653022290,
          "extra": "0",
          "base_price": "500000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "62572278791306709215886307843123713128388855247009877694012732230960087313502",
          "expiration_time": 1653281570,
          "maker": {
            "address": "0x990450d56c41ef5e7d818e0453c2f813feb9448a",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
            "user": 2380846,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x4cc425b0c91413a6cc4919e4fc2cb5b9204362462a516f1095f8c917f1bc23f6",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "5000000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x877d99a5dacccaefd64fd66dc2a3120f3eb1c655f4e95d8caea54e5ca3b240ad",
          "s": "0x222886592a6764f92759ddc508662eded158f98f57ff2d795e4e64cac94ee50d",
          "fee_method": 1,
          "calldata": "0x96809f90000000000000000000000000990450d56c41ef5e7d818e0453c2f813feb9448a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 28,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-20T04:53:16.874975",
          "current_price": "500000000000000000.0000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-05-21T18:34:38",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "taker_relayer_fee": "1250",
          "order_hash": "0x789ff8df2d62107b472d16c2447d4a2eb2d566573a2cc09fa73117a8e9191a17",
          "taker_protocol_fee": "0",
          "listing_time": 1652898842,
          "extra": "0",
          "base_price": "50000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 0,
          "quantity": "1",
          "salt": "26927010275505232284479962497398226525326824599451667040658976020015208746310",
          "expiration_time": 1653158078,
          "maker": {
            "address": "0xc08aa11c0b3faa01e49bb14505677d0177507c16",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/14.png",
            "user": 325292,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x789ff8df2d62107b472d16c2447d4a2eb2d566573a2cc09fa73117a8e9191a17",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "500000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "WETH",
            "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "image_url": "https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg",
            "decimals": 18,
            "name": "Wrapped Ether",
            "usd_price": "2022.460000000000036000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x7feec63207e0a2b9c0ab4866d344f464d993a20e4d6a96d336a8d3e81ab962ec",
          "s": "0x7dfcee591f54c81ddeadf51c5d4a5321675efef3f13a4f1d971ae3dcc9793e06",
          "fee_method": 1,
          "calldata": "0x96809f900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c08aa11c0b3faa01e49bb14505677d0177507c160000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 27,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-18T18:36:40.294045",
          "current_price": "50000000000000000.00000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "0",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-06-19T11:00:45",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0x9a2cde46d86c378ac3a6f6665fa33cfb9d27e48e2b5d48a7b8bef1a30fe80596",
          "taker_protocol_fee": "0",
          "listing_time": 1652957959,
          "extra": "0",
          "base_price": "1000000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "38558839868142797109435442041325952847822079400661667044538842977710448535701",
          "expiration_time": 1655636445,
          "maker": {
            "address": "0x71d5cde4629bdb59f5ca65a07a522c67b37dfb34",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/29.png",
            "user": 33204871,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x9a2cde46d86c378ac3a6f6665fa33cfb9d27e48e2b5d48a7b8bef1a30fe80596",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "10000000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x4f9468b299bd546d7929d1c27b2fd8fab75ec239ac20a3cef928e416a5ac9a3c",
          "s": "0x46e35fb38b86d45f18cc8c6004863d392d8b9b164a46361de0083139ea8f72ef",
          "fee_method": 1,
          "calldata": "0x96809f9000000000000000000000000071d5cde4629bdb59f5ca65a07a522c67b37dfb3400000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 27,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-19T11:01:46.465300",
          "current_price": "1000000000000000000.000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-05-23T04:52:50",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0x390a6c065836d6ab159655bac12e57081cf0b2c004c1fe4633eb4c91dc4c4cea",
          "taker_protocol_fee": "0",
          "listing_time": 1653022307,
          "extra": "0",
          "base_price": "500000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "75404956017658410780318082665484824604134009656371343482656320815219282017025",
          "expiration_time": 1653281570,
          "maker": {
            "address": "0x990450d56c41ef5e7d818e0453c2f813feb9448a",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/17.png",
            "user": 2380846,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x390a6c065836d6ab159655bac12e57081cf0b2c004c1fe4633eb4c91dc4c4cea",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "5000000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0x2f41dcaf34d5f43ebe52c59e3fd40086e9948c8e80f4b09d278c4df54fceaf43",
          "s": "0x0d21a83503add4da5294ab3a5cecb38c8a2e41720c41fa1de77c0e94310c0511",
          "fee_method": 1,
          "calldata": "0x96809f90000000000000000000000000990450d56c41ef5e7d818e0453c2f813feb9448a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 28,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-20T04:53:33.290687",
          "current_price": "500000000000000000.0000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        },
        {
          "closing_date": "2022-05-20T11:37:39",
          "metadata": {
            "schema": "ERC1155",
            "asset": {
              "address": "0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
              "quantity": "1",
              "id": "7"
            }
          },
          "fee_recipient": {
            "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
            "user": 3585,
            "config": "verified"
          },
          "payment_token": "0x0000000000000000000000000000000000000000",
          "taker_relayer_fee": "0",
          "order_hash": "0x23d1ac06346d87a4c7bc1ae8c98f7d48852bbc50c5d5a001793c4ca8d5c2f860",
          "taker_protocol_fee": "0",
          "listing_time": 1652960202,
          "extra": "0",
          "base_price": "400000000000000000",
          "maker_referrer_fee": "0",
          "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "taker": {
            "address": "0x0000000000000000000000000000000000000000",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
            "user": 1766,
            "config": ""
          },
          "static_target": "0x0000000000000000000000000000000000000000",
          "side": 1,
          "quantity": "1",
          "salt": "5711904860332423077244544402951205007456632483195635104447385799500765395397",
          "expiration_time": 1653046659,
          "maker": {
            "address": "0xfa639ba57ad35d63688a9ba0fa7d89b79699ea5e",
            "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/3.png",
            "user": 19692212,
            "config": ""
          },
          "approved_on_chain": false,
          "prefixed_hash": "0x23d1ac06346d87a4c7bc1ae8c98f7d48852bbc50c5d5a001793c4ca8d5c2f860",
          "target": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "current_bounty": "4000000000000000",
          "finalized": false,
          "closing_extendable": false,
          "bounty_multiple": "0.01",
          "static_extradata": "0x",
          "payment_token_contract": {
            "symbol": "ETH",
            "address": "0x0000000000000000000000000000000000000000",
            "image_url": "https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg",
            "decimals": 18,
            "name": "Ether",
            "usd_price": "2021.880000000000109000",
            "eth_price": "1.000000000000000"
          },
          "r": "0xb729338fe068e8a92d591c68482e258e143bec51753b811a6d6c3d0fd5e4ade9",
          "s": "0x67b6ab13f803737d3b22a63a97843aa1a15f69b3ba4d9b380c456416f2fb1ad5",
          "fee_method": 1,
          "calldata": "0x96809f90000000000000000000000000fa639ba57ad35d63688a9ba0fa7d89b79699ea5e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba27d17821f9ac041b648fe9f90ec40abb8c3c200000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
          "how_to_call": 1,
          "v": 28,
          "cancelled": false,
          "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "created_date": "2022-05-19T11:39:16.909330",
          "current_price": "400000000000000000.0000000000",
          "sale_kind": 0,
          "maker_relayer_fee": "1250",
          "maker_protocol_fee": "0",
          "marked_invalid": false
        }
      ]
    }
  }
  // return NFTRequest.get('www.baidu.com')
}
