import React from "react";
import { Dimensions } from "react-native";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { AppImage } from "../../components/atoms/atm.image/image.atm";
import { NFTImage } from "../../components/atoms/atm.nft/nft-image.atm";
import { CheckoutSuccessContent, CheckoutSuccessText } from "./checkout-success.styled";

import AppImageResource from '../../assets/images';
import { NavigateButton, NavigateButtonHL } from "../../components/atoms/atm.navigation-button/navigate-button.atm.styled";
import { NavigateButtonHLText } from "../../components/atoms/atm.navigation-button/navigate-button-text.atm.styled";


const CheckoutSuccess = (props) => {
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.75);
  return (
    <Container addFlex>
      <CheckoutSuccessContent paddingValue={8}>
        <CheckoutSuccessContent paddingValue={12} hasBorder>
          <CheckoutSuccessText
            fontSize={24}
            isBold
          >{"Compra realizada com sucesso"}</CheckoutSuccessText>
        </CheckoutSuccessContent>
        <CheckoutSuccessContent>
          <AppImage 
            source={`${AppImageResource.eistein}`}
            sourceWidth={(imageSourceWidth).toString()}
            sourceHeight={(imageSourceWidth).toString()}
          />
        </CheckoutSuccessContent>
        <CheckoutSuccessContent paddingValue={36}>
          <NavigateButtonHL
            bgColor="#E3B011"
            onPress={() => props.navigation.navigate("Home")}
          >
            <NavigateButtonHLText>
              {"Back to Home"}
            </NavigateButtonHLText>
          </NavigateButtonHL>
        </CheckoutSuccessContent>
      </CheckoutSuccessContent>
    </Container>
  )
}

export default CheckoutSuccess;

// const pressCard = (item: NFTData) => {
//   navigating.navigate(
//     {
//       name: "CheckoutSuccess",
//       params: {}
//   } as never)
// }