import "react-native-gesture-handler";

import React from "react";
import WalletProvider from "@/provider/WalletProvider";
import store from "@/store/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <WalletProvider />
    </Provider>
  );
};

export default App;
