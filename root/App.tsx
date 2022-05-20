import "react-native-gesture-handler";

import React from "react";
import WalletProvider from "./provider/WalletProvider";
import store from "@/store/Store";
import { Provider } from "react-redux";
import { Nav } from "./routes/Nav";

const App = () => {
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  );
};

export default App;
