import { Price } from "../../system/interfaces/common.interfaces";

export interface PaymentModel {
  totalPrice: Price;
  fees?: Fees | null;
  
}

export interface Fees {
  totalDiscountPercentage?: number;
  totalFees: number;
}