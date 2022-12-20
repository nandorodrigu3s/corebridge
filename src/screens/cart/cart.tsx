import React from "react";
import { Text } from "react-native";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NavHighlightButtonComponent } from "../../components/mols/mol.navigation-button/navigation-highlight-button.mol";




const Cart = () => {
  return (
    <Container>
      <Text>Hi There Cart</Text>
      <NavHighlightButtonComponent
        routeName="Home"
        label="Home"
      />
    </Container>
  )
};


export default Cart;