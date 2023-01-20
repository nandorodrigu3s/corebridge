import React, { createContext } from "react";
import { NFTData, Price, UserAuthData } from "../system/interfaces/common.interfaces";

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
  totalPrice: Price;
  discount: Price | null;
}

export interface CustomAppBackdrop {
  visible: boolean;
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
  resetToPrevious: (successCallback?: () => void) => void;
}

export const CartContext = createContext<CartData & ICartContext>({
  nfts: [],
  inCartCount: 0,
  totalPrice: {
    label: '',
    value: 0
  },
  discount: {
    label: '',
    value: 0
  },
  addCartData: (nftData: NFTData, successCallback?: () => void) => {},
  removeCartData: (nftData: NFTData, successCallback?: () => void) => {},
  clearCartData: (successCallback?: () => void) => {},
  resetToPrevious: (successCallback?: () => void) => {},
});

//BACKDROP
export interface ICustomBackdrop {
  setVisible: (visible: boolean, successCallback?: () => void) => void;
}

export const BackdropContext = createContext<CustomAppBackdrop & ICustomBackdrop>({
  visible: false,
  setVisible: (visible: boolean, successCallback?: () => void) => {},
});


