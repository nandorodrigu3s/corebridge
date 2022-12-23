import { NFTData } from "../../system/interfaces/common.interfaces";

export const getPrices =  (toBuy: NFTData[]): string => {
  let price = 0;
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  price = toBuy.map(item => item.price.value).reduce((prev, current, index) => {
    price = prev + current
    return price;
  }, 0);
  return formatter.format(price);
}