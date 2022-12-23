import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { CartContext, CartData } from ".";
import { NFTData } from "../system/interfaces/common.interfaces";



function CartProvider({ children }: any) {
  const [cartValues, setCartValues] = useState<CartData>({
    nfts: [],
    inCartCount: 0
  });

  const removeCartData = (nftData: NFTData, successCallback?: () => void): void => {
    const nfts = cartValues.nfts.filter(item => !(item.id === nftData.id));
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter
    });
    successCallback && successCallback();
  }

  const addCartData = (nftData: NFTData, successCallback?: () => void): void => {
    const isOnCart = cartValues.nfts.some(item => item.id === nftData.id);
    if (isOnCart) {
        Toast.show({
          type: 'error',
          text1: 'Oops',
          text2:  `O item | ${nftData.name} | já está no seu carrinho!`
        });
      return;
    }
    const nfts = [...cartValues.nfts, nftData];
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter
    });
    successCallback && successCallback();
  }

  return (
    <CartContext.Provider value={{...cartValues, ...{addCartData, removeCartData}}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;