import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { SubmitButtonText } from "../../components/atoms/atm.submit-button/submit-button-text.atm.styled";
import { SubmitButton } from "../../components/atoms/atm.submit-button/submit-button.atm.styled";
import { NothingHere } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { TotalCartComponent } from "../../components/mols/mol.total-cart/total-cart.mol";
import { CartNFTList } from "../../components/organ/organ.cart-nft-list/cart-nft-list.organ";
import { CartContext, UserContext } from "../../contexts";
import { getPrices, handleSubmitPayment } from "./cart.repository";


const Cart = () => {
  const cartData = useContext(CartContext);
  const { nfts } = cartData;
  const  { isLogged } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState<string>('0');
  const [loadingButton, setLoadingButton] = useState(false);
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [nftsData, setNFTsData] = useState(nfts);
  useEffect(() => {
    const totalPrice = getPrices(nfts);
    setTotalPrice(totalPrice);
  });

  useEffect(() => {
    nftsData
  },[nftsData]);

  return (
    <SafeAreaView>
      <Container hasPadding hasBorder containerHeight={100}>
        {nfts?.length ? 
          <>
            <CartNFTList
              cardsData={nfts ?? []}
            />
            <TotalCartComponent
              totalPrice={`${totalPrice}`}
            />
            <Container noFlex justifyCon alignIt>
              <SubmitButton
                onPress={() => {
                  setLoadingButton(true);
                  handleSubmitPayment({ isLogged, navigate }, () => {
                      setLoadingButton(false);
                    }
                  );
                }}
                buttonWidth={75}
                alignIt
              >
                <SubmitButtonText fontSize={15}>
                  { loadingButton
                    ? <ActivityIndicator size={20} color="#FFF" />
                    : "Finalizar Compra"
                  }
                </SubmitButtonText>
              </SubmitButton>
            </Container>
          </>
          : <NothingHere hideButton title={"Nenhum item no carrinho"} />
        }
      </Container>
    </SafeAreaView>
  );
};

export default React.memo(Cart);