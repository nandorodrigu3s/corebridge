import React from "react";
import { Container } from "../../atoms/atm.containers/container.atm.styled";
import { AppImage } from "../../atoms/atm.image/image.atm";
import { NavigateButtonHLText } from "../../atoms/atm.navigation-button/navigate-button-text.atm.styled";
import { NavigateButtonHL } from "../../atoms/atm.navigation-button/navigate-button.atm.styled";
import AppImageResource from '../../../assets/images'
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NothingHereContent, NothingHereText } from "./nothing-here.mol.styled";

interface NothingHereProps {
  title: string;
  imagePercentWidthValue?: number;
  routeName?: string;
  params?: any
  hideButton?: boolean;
  hasBorder?: boolean;
}
export const NothingHere = (props: NothingHereProps) => {
  const navigation = useNavigation()
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.75);
  
  return (
    <Container containerHeight={100} justifyCon hasBorder={props.hasBorder}>
      <NothingHereContent paddingValue={8}>
        <NothingHereContent paddingValue={12} hasBorder>
          <NothingHereText
            fontSize={24}
            isBold
          >{props.title}</NothingHereText>
        </NothingHereContent>
        <NothingHereContent>
          <AppImage
            source={`${AppImageResource.eistein}`}
            sourceWidth={(imageSourceWidth).toString()}
            sourceHeight={(imageSourceWidth).toString()}
          />
        </NothingHereContent>
        { !props.hideButton &&
          <NothingHereContent paddingValue={36}>
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
          </NothingHereContent>
        }
      </NothingHereContent>
    </Container>
  )
}