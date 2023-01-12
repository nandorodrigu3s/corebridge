import Toast from "react-native-toast-message";
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

export const buildUpdatCartVariables = (nft: NFTData, type: UpdateCartType) => {
  return {
    updateCart: {
      nft,
      type
    }
  };
}

export const showMessage = (message: string, isError = false) => {
  Toast.show({
    type: isError ? 'error' : 'success',
    text1: isError ? 'Oops' : 'Yahooy!',
    text2:  `${message}`
  });
}