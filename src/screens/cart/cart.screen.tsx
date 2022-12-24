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
import { CartContext } from "../../contexts";
import { getPrices, handleSubmitPayment } from "./cart.repository";


const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<string>('0');
  const [loadingButton, setLoadingButton] = useState(false);
  const cartData = useContext(CartContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
              cardsData={nfts ?? []}
            />
            <TotalCartComponent
              totalPrice={`${totalPrice}`}
            />
            <Container noFlex justifyCon alignIt>
              <SubmitButton
                onPress={() => {
                  setLoadingButton(true);
                  handleSubmitPayment(
                    () => {
                      setLoadingButton(false);
                      navigation.navigate({name: "CheckoutSuccess", params: {}} as never);
                    }
                  );
                } 
                }
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