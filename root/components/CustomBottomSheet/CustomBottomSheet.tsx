import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, Text, TouchableOpacity } from 'react-native';
import {
  useWalletConnect,
  withWalletConnect,
  RenderQrcodeModalProps,
  WalletService,
} from '@walletconnect/react-native-dapp';
import * as React from 'react';
import styles from "./styles";
import { BottomSheet } from 'react-native-elements';

export function CustomBottomSheet({
  walletServices,
  visible,
  connectToWalletService,
  uri,
}: RenderQrcodeModalProps): JSX.Element {
  const renderContent = React.useCallback(() => {
    return walletServices.map((walletService: WalletService, i: number) => (
      <TouchableOpacity key={`i${i}`} onPress={() => connectToWalletService(walletService, uri)}>
        <Image
                style={styles.image}
                source={require("@/resources/home/return_up.png")}
              />
        <Text>{walletService.name}</Text>
      </TouchableOpacity>
    ));
  }, [walletServices, uri]);
  return <BottomSheet renderContent={renderContent} {...etc} />;
};
