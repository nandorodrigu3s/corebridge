import Toast from "react-native-toast-message";
import { NFTData, Price, ToastMessageProps, ToastTypes } from "../interfaces/common.interfaces";


export const toastMessage = ({
  message = 'Desculpe, tivemos um problema por aqui. Tente mais tarde',
  title = 'Oops',
  type = ToastTypes.ERROR
}: ToastMessageProps) => {
  Toast.show({
    type: type,
    text1: title,
    text2:  `${message}`
  });
}

export const getTotalPriceLabel =  (ntfDataList: NFTData[]): string => {
  let price = 0;
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  price = ntfDataList.map(item => item.price.value).reduce((prev, current, index) => {
    price = prev + current
    return price;
  }, 0);
  return formatter.format(price);
}

export const getTotalPrice =  (ntfDataList: NFTData[]): Price => {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  let price: number = ntfDataList.map(item => item.price.value).reduce((prev, current, index) => {
    price = prev + current
    return price;
  }, 0);
  let label = formatter.format(price);
  return { label, value: price } as Price;
}