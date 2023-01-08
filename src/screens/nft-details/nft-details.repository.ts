import { Toast } from "react-native-toast-message/lib/src/Toast";

export const showMessage = () => {
  const message = "NFT adicionado ao carrinho com sucesso!";
  Toast.show({
    type: 'success',
    text1: 'All right!!',
    text2:  `${message}`
  });
}