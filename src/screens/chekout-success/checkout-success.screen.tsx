import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { NothingHere as CheckoutSuccessComponent } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { BackdropContext, CartContext, UserContext } from "../../contexts";
import { getWalletData } from "../../graphql/queries/get-user.query.graphql";

const CheckoutSuccess = () => {

  const { clearCartData } = useContext(CartContext);
  const { setVisible } = useContext(BackdropContext);
  const { error, data, loading, client } = useQuery(getWalletData(), { fetchPolicy: 'network-only' });
  const { updateUserWallet } = useContext(UserContext);

  useEffect(() => {
    clearCartData();
  },[]);

  useEffect(() => {
    console.log("client ====================> ", client);
    if (data?.getUser) {
      const { wallet } = data?.getUser;
      updateUserWallet(wallet);
      setVisible(false);
    }
  }, [data]);

  if (error) {
    setVisible(false);
  }

  return (
    <CheckoutSuccessComponent
      title="Compra realizada com sucesso"
      routeName="Home"
      hasBorder
    />
  )
}

export default CheckoutSuccess;