import React from "react";
import { CheckoutSuccessContent, CheckoutSuccessText } from "../../../screens/chekout-success/checkout-success.styled";
import { Container } from "../../atoms/atm.containers/container.atm.styled";
import { AppImage } from "../../atoms/atm.image/image.atm";
import { NavigateButtonHLText } from "../../atoms/atm.navigation-button/navigate-button-text.atm.styled";
import { NavigateButtonHL } from "../../atoms/atm.navigation-button/navigate-button.atm.styled";
import AppImageResource from '../../../assets/images'
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface NothingHereProps {
  title: string;
  imagePercentWidthValue?: number;
  routeName?: string;
  params?: any
  hideButton?: boolean;
}
export const NothingHere = (props: NothingHereProps) => {
  const navigation = useNavigation()
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.75);
  
  return (
    <Container containerHeight={100} justifyCon>
      <CheckoutSuccessContent paddingValue={8}>
        <CheckoutSuccessContent paddingValue={12} hasBorder>
          <CheckoutSuccessText
            fontSize={24}
            isBold
          >{props.title}</CheckoutSuccessText>
        </CheckoutSuccessContent>
        <CheckoutSuccessContent>
          <AppImage 
            source={`${AppImageResource.eistein}`}
            sourceWidth={(imageSourceWidth).toString()}
            sourceHeight={(imageSourceWidth).toString()}
          />
        </CheckoutSuccessContent>
        { !props.hideButton &&
          <CheckoutSuccessContent paddingValue={36}>
            <NavigateButtonHL
              bgColor="#E3B011"
              onPress={() => navigation.navigate(
                {
                  name: props.routeName,
                  params: props.params || {}
                } as never
              )}
            >
              <NavigateButtonHLText>
                {`Back to ${props.routeName}`}
              </NavigateButtonHLText>
            </NavigateButtonHL>
          </CheckoutSuccessContent>
        }
      </CheckoutSuccessContent>
    </Container>
  )
}