import React, { createContext } from "react";
import { NFTData } from "../system/interfaces/common.interfaces";

export interface User {
  name: string;
  avatar_url: string;
}

export interface CartData {
  nfts: NFTData[],
  inCartCount: number;
}

export interface ICartContext {
  addCartData: (nftData: NFTData, successCallback?: () => void) => void;
  removeCartData: (nftData: NFTData, successCallback?: () => void) => void;
  clearCartData: (successCallback?: () => void) => void;
}

// Cart context, default to light theme
export const CartContext = createContext<CartData & ICartContext>({
  nfts: [],
  inCartCount: 0,
  addCartData: (nftData: NFTData, successCallback?: () => void) => {},
  removeCartData: (nftData: NFTData, successCallback?: () => void) => {},
  clearCartData: (successCallback?: () => void) => {},
});

// Signed-in user context
export const UserContext = createContext<User>({
  name: '',
  avatar_url: ''
});



