import { AuthData, User } from "../../graphql/types";

export interface UserData extends User {}

export enum ToastTypes {
  ERROR = 'error',
  SUCCESS = 'success'
};
export interface ToastMessageProps {
  message?: string;
  title?: string;
  type?: ToastTypes;
}

export interface UserAuthData extends AuthData {
  wallet: NFTData[]
}

export interface NFTData {
  id: number;
  num_sales: number;
  category: string;
  image_url: string;
  name: string;
  description: string;
  external_link: string;
  permalink: string;
  collection: {
    created_date: string;
    name: string;
  };
  token_id: string;
  price: Price;
}

export interface Price {
  label: string;
  value: number;
}
