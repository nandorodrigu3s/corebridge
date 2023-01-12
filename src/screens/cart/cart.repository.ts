import { UpdateCartType } from "../../graphql/types";
import { NFTData } from "../../system/interfaces/common.interfaces";


export const handleSubmitPayment = (
  submitParams: { [key: string]: any },
  paymentCallback?: () =>  void
) => {
  setTimeout(() => {
    if (!submitParams['isLogged']) {
      submitParams['navigate']('Login', { routeName: 'Cart' })
      paymentCallback && paymentCallback();
      return;
    }
    submitParams['navigate']('CheckoutSuccess', {})
    paymentCallback && paymentCallback();
  }, 2500);
}

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

export const buildUpdatCartVariables = (type: UpdateCartType, nft: NFTData) => {
  return {
    updateCart: {
      nft,
      type
    }
  };
}