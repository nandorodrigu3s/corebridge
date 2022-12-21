import React, { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { CartNFTList } from "../../components/organ/organ.cart-nft-list/cart-nft-list.organ";
import { NFTCardList } from "../../components/organ/organ.nft-list/nft-list.organ";
import { constData } from "../../system/constants";
import { NFTData } from "../../system/interfaces/common.interfaces";

export interface CartProps {
  cartItems?: NFTData[];
}

const Cart = (props: CartProps) => {
  const { cartItems } = props;

  return (
    <SafeAreaView>
      <Container hasPadding hasBorder>
        <CartNFTList
          cardsData={cartItems ?? constData}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Cart;


// const pressCard = (item: NFTData) => {
//   navigating.navigate(
//     {
//       name: "Cart",
//       params: {
//         cartItems: cardsData
//       }
//   } as never)
// }