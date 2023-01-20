import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { CartContext, CartData } from ".";
import { NFTData, Price } from "../system/interfaces/common.interfaces";
import { getTotalPrice } from "../system/utils";



function CartProvider({ children }: any) {
  const [cartValues, setCartValues] = useState<CartData>({
    nfts: [],
    inCartCount: 0,
    discount: null,
    totalPrice: getTotalPrice([])
  });

  const removeCartData = (nftData: NFTData, successCallback?: () => void): void => {
    const nfts = cartValues.nfts.filter(item => !(item.id === nftData.id));
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter,
      discount: null,
      totalPrice: getTotalPrice(nfts)
    });
    successCallback && successCallback();
  }

  const addCartData = (nftData: NFTData, successCallback?: () => void): void => {
    const isOnCart = cartValues.nfts.some(item => item.id === nftData.id);
    if (isOnCart) {
      Toast.show({
        type: 'error',
        text1: 'Oops',
        text2: `O item | ${nftData.name} | já está no seu carrinho!`
      });
      return;
    }
    const nfts = [...cartValues.nfts, nftData];
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter,
      discount: null,
      totalPrice: getTotalPrice(nfts)
    });
    successCallback && successCallback();
  }

  const clearCartData = (successCallback?: () => void): void => {
    const nfts: NFTData[] = [];
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter,
      discount: null,
      totalPrice: getTotalPrice(nfts)
    });
    successCallback && successCallback();
  }

  const resetToPrevious = (successCallback?: () => void): void => {
    setCartValues(cartValues);
    successCallback && successCallback();
  }

  //TODO validate if it's necessary
  const buildCartPrices = (nftData: NFTData[]) => {
    return getTotalPrice(nftData);
  };

  return (
    <CartContext.Provider value={
      {
        ...cartValues,
        ...{
          addCartData,
          removeCartData,
          clearCartData,
          resetToPrevious
        }
      }
    }>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;