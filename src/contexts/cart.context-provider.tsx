import React, { useState } from "react";
import { CartContext, CartData } from ".";
import { NFTData } from "../system/interfaces/common.interfaces";



function CartProvider({ children }: any) {
  const [cartValues, setCartValues] = useState<CartData>({
    nfts: [],
    inCartCount: 0
  });

  const removeCartData = (nftData: NFTData): void => {
    const nfts = cartValues.nfts.filter(item => !(item.id === nftData.id));
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter
    });
  }

  const addCartData = (nftData: NFTData): void => {
    const nfts = [...cartValues.nfts, nftData];
    const counter = nfts.length;
    setCartValues({
      nfts,
      inCartCount: counter
    });
  }

  return (
    <CartContext.Provider value={{...cartValues, ...{addCartData, removeCartData}}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;