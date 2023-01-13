import React from "react";
import { Container } from "../../atoms/atm.containers/container.atm.styled";
import { ProfileContainer } from "../../atoms/atm.containers/profile-container.atm.styled";
import { AppImage } from "../../atoms/atm.image/image.atm";
import { NavigateButtonComponent } from "../../mols/mol.navigation-button/navigate-button.mol";
import AppImageResource from '../../../assets/images';
import { Dimensions } from "react-native";

export const NotLoggedInComponent = () => {
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.75);
  return (
    <Container
      justifyCon
      alignIt
      hasBorder
    >
      <ProfileContainer
        justifyCon={"center"}
        alignItem={"center"}
      >
        <AppImage
          source={`${AppImageResource.logo}`}
          sourceWidth={(imageSourceWidth).toString()}
          sourceHeight={(imageSourceWidth).toString()}
        />
      </ProfileContainer>
      <ProfileContainer
        alignCon="center"
        justifyCon="center"
        containerWidth={100}
        alignItem={"center"}
      >
        <NavigateButtonComponent
          justifyCon
          alignIt
          buttonWidth={75}
          label={"Fazer Login"}
          routeName={"Login"}
        />
      </ProfileContainer>
    </Container>
  )
}

