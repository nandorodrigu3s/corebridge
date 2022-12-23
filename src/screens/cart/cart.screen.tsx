import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NothingHere } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { TotalCartComponent } from "../../components/mols/mol.total-cart/total-cart.mol";
import { CartNFTList } from "../../components/organ/organ.cart-nft-list/cart-nft-list.organ";
import { CartContext } from "../../contexts";
import { constData } from "../../system/constants";
import { getPrices } from "./cart.repository";


const Cart = () => {
  const cartData = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<string>('0');
  const { nfts } = cartData;
  useEffect(() => {
    const totalPrice = getPrices(nfts);
    setTotalPrice(totalPrice);
  });

  return (
    <SafeAreaView>
      <Container hasPadding hasBorder containerHeight={100}>
        {nfts?.length ? 
          <>
            <CartNFTList
              cardsData={nfts ?? constData}
            />
            <TotalCartComponent
              totalPrice={`${totalPrice}`}
            />
          </>
          : <NothingHere hideButton title={"Nenhum item no carrinho"} />
        }
      </Container>
    </SafeAreaView>
  );
};

export default React.memo(Cart);