import { NFTData, Price } from "../../../system/interfaces/common.interfaces";

export interface CreateOrder {
  nfts: NFTData[];
  totalPrice: Price;
  discount?: Price;
}