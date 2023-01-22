import { useMutation } from "@apollo/client";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NothingHere } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { SubmitButtonComponent } from "../../components/mols/mol.submit-button/submit-button.mol";
import { TotalCartComponent } from "../../components/mols/mol.total-cart/total-cart.mol";
import { CartNFTList } from "../../components/organ/organ.cart-nft-list/cart-nft-list.organ";
import { BackdropContext, CartContext, UserContext } from "../../contexts";
import { createOrderMutation } from "../../graphql/mutations/create-order.mutation.graphql";
import { toastMessage } from "../../system/utils";
import { buildOrderVariables, handleSubmitPayment } from "./cart.repository";


const Cart = () => {
  const cartData = useContext(CartContext);
  const { nfts, totalPrice } = cartData;
  const  { isLogged } = useContext(UserContext);
  const [loadingButton, setLoadingButton] = useState(false);
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { setVisible } = useContext(BackdropContext);

  const [createOrder, { loading, error, client } ] = useMutation(createOrderMutation(), {
    fetchPolicy: 'no-cache'
  });

  const setLoads = (isLoading: boolean) => {
    setLoadingButton(isLoading);
    setVisible(isLoading);
  }

  const handleSubmit = () => {
    const variables = buildOrderVariables(cartData);
    setLoads(true);
    createOrder({variables})
    .then(({ data }) => {
      handleSubmitPayment(
        { isLogged, navigate },
        () => setLoadingButton(false)
      );
    })
    .catch((orderError) => {
      console.log("cliente checkout ==========> ", client)
      setLoads(false);
      let message = error?.message ?? orderError?.message
      toastMessage({ message });
    });
  }

  return (
    <SafeAreaView>
      <Container hasPadding hasBorder containerHeight={100}>
        {nfts?.length ? 
          <>
            <CartNFTList
              cardsData={nfts ?? []}
            />
            <TotalCartComponent
              totalPrice={`${totalPrice.label}`}
            />
            <Container noFlex justifyCon alignIt>
              <SubmitButtonComponent
                loadingButton={loadingButton}
                onPress={handleSubmit}
                labelFontSize={15}
                buttonWidth={75}
                alignIt
                loadingSize={20}
                loadingColor="#FFF"
              />
            </Container>
          </>
          : <NothingHere hideButton title={"Nenhum item no carrinho"} />
        }
      </Container>
    </SafeAreaView>
  );
};

export default React.memo(Cart);