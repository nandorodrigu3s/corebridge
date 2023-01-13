import React, { useContext, useEffect } from "react";
import { NothingHere as CheckoutSuccessComponent } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { CartContext } from "../../contexts";

const CheckoutSuccess = () => {

  const { clearCartData } = useContext(CartContext);

  useEffect(() => {
    clearCartData();
  },[]);

  return (
    <CheckoutSuccessComponent
      title="Compra realizada com sucesso"
      routeName="HomeTab"
      hasBorder
    />
  )
}

export default CheckoutSuccess;