import React from "react";
import { Text } from "react-native";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NavHighlightButtonComponent } from "../../components/mols/mol.navigation-button/navigation-highlight-button.mol";



const Home = () => {
  return (
    <Container hasPadding>
      <Text>Hi There Home</Text>
      <NavHighlightButtonComponent
        routeName="Login"
        label="Login"
      />
      <NavHighlightButtonComponent
        routeName="Cart"
        label="Cart"
      />
      <NavHighlightButtonComponent
        routeName="CheckoutSuccess"
        label="CheckoutSuccess"
      />
    </Container>
  );
};


export default Home;