import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigateTopButton } from "../../atoms/atm.navigation-button/navigate-button.atm.styled";
import { NavigateButtonText } from "../../atoms/atm.navigation-button/navigate-button-text.atm.styled";
import { Container } from "../../atoms/atm.containers/container.atm.styled";

interface NavigateButtonComponentProps {
  onPress?: () => void;
  routeName?: string;
  params?: any;
  //container
  hasPadding?: boolean;
  //button
  textColor?: string;
  bgButtonColor?: string;
  radiusButtonBorder?: number;
  buttonWidth?: number;
  hasLargePadding?: boolean;
  hasPaddingLeft?: boolean;
  justifyCon?: boolean;
  alignIt?: boolean;
  //text-button
  label: string;
  noUppercase?: boolean;
  fontSize?: number;
  fontWeight?: number | string;
}


interface AppRouteParams {
  [key: string]: any;
}

export const NavigateButtonComponent = (props: NavigateButtonComponentProps) => {
  const navigation = useNavigation();
  const { onPress } = props;

  const navigateTo = (route?: string, param?: AppRouteParams) => {
    navigation.navigate({ name: route, param } as never);
  }

  return (
    <NavigateTopButton
      onPress={onPress ? onPress : () => navigateTo(props.routeName, props.params)}
      buttonWidth={props.buttonWidth}
      color={props.textColor}
      bgColor={props.bgButtonColor}
      radiusBorderValue={props.radiusButtonBorder}
      hasLargePadding={props.hasLargePadding}
      hasPaddingLeft={props.hasPaddingLeft}
      justifyCon={props.justifyCon}
      alignIt={props.alignIt}
    >
      <NavigateButtonText
        transformText={!props.noUppercase}
        color={props.textColor}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
      >
        {props.label}
      </NavigateButtonText>
    </NavigateTopButton>
  )
}