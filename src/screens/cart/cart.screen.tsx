import React, { useContext } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NothingHere } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { CartNFTList } from "../../components/organ/organ.cart-nft-list/cart-nft-list.organ";
import { CartContext } from "../../contexts";
import { constData } from "../../system/constants";

// export interface CartProps {
//   cartItems?: NFTData[];
// }

const Cart = () => {
  const cartData = useContext(CartContext);
  const { nfts } = cartData;

  return (
    <SafeAreaView>
      <Container hasPadding hasBorder>
        {nfts?.length

          ? <CartNFTList
            cardsData={nfts ?? constData}
          />
          : <NothingHere
              hideButton
              title={"Nenhum item no carrinho"}
            ></NothingHere>
        }
      </Container>
    </SafeAreaView>
  );
};

export default React.memo(Cart);


// const pressCard = (item: NFTData) => {
//   navigating.navigate(
//     {
//       name: "Cart",
//       params: {
//         cartItems: cardsData
//       }
//   } as never)
// }