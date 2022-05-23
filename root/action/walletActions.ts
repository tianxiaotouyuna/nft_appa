import { walletConstants } from "@/constants/walletConstants";
import { CacheKeys } from "../constants";
import { Storage } from "../utils";

/*
 The export statement is used to export the only function in the file so that the function can be called using `walletsActions.connect()`
 */
export const walletActions = {
  connect,
  disconnect,
};

/*
This function is a simple method provided by Celo to connect to the Valora or Alfajores (for testing) wallet.
The `dispatch()` is a redux function which is used to emit actions which we can then listen for in the reducer and update the state accordingly.
*/

function connect(connector) {
  return (dispatch: any) => {
    let asyncConnect = () =>
      connector
        .connect()
        .then(async function (result: any) {
          console.log("成功：" + JSON.stringify(result));
          dispatch(success(result));
          await Storage.save(CacheKeys.WALLETINFO, result);

        })
        .catch(function (error: any) {
          console.log("失败：" + error);
          dispatch(failure(error));
        });

    dispatch(request("Connecting to wallet"));
    asyncConnect();
  };
}

//These are the function calls which are dispatched when the user makes a request. The state of the app changes with the status of the request response.
function request(message: string) {
  return { type: walletConstants.CONNECT_REQUEST, message };
}
function success(res: object) {
  return { type: walletConstants.CONNECT_SUCCESS, res };
}
function failure(error: any) {
  return { type: walletConstants.CONNECT_FAILURE, error };
}

function disconnect(connector) {
  return async (dispatch: any) => {
    // This dispatch calls a function that is declared later on in the code.
    let asyncDisconnect = async () => {
      await connector.killSession();
    };
    await Storage.remove(CacheKeys.WALLETINFO);
    dispatch(requestDisconnect("Disconnecting from wallet"));
    asyncDisconnect();
  };
  function requestDisconnect(message: string) {
    return { type: walletConstants.DISCONNECT_REQUEST, message };
  }
}
