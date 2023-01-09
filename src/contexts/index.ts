import React, { createContext } from "react";
import { NFTData, UserAuthData } from "../system/interfaces/common.interfaces";

export interface User {
  token: string;
  name: string;
  avatar_url: string;
  isLogged: boolean;
  nfts: NFTData[];
}

export interface CartData {
  nfts: NFTData[],
  inCartCount: number;
}
//USER
export interface IUserContext {
  addUserData: (userData: UserAuthData, successCallback?: () => void) => void;
  cleanUserData: (successCallback?: () => void) => void;
}

export const UserContext = createContext<User & IUserContext>({
  token: '',
  name: '',
  avatar_url: '',
  isLogged: false,
  nfts: [] as NFTData[],
  addUserData: (userData: UserAuthData, successCallback?: () => void) => {},
  cleanUserData: (successCallback?: () => void) => {},
});

//CART
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



