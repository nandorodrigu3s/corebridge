import Toast from "react-native-toast-message";
import { CartData } from "../../contexts";
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

export const buildUpdatCartVariables = (nft: NFTData, type: UpdateCartType) => {
  return {
    updateCart: {
      nft,
      type
    }
  };
}

export const buildOrderVariables = (cartData: CartData) => {
  const { nfts, totalPrice } = cartData;
  return {
    createOrderInput: {
      nfts,
      totalPayment: totalPrice
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