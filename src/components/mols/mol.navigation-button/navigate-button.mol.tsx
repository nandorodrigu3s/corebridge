import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigateContainer } from "../../atoms/atm.containers/navigate-container.atm.styled";
import { NavigateButton } from "../../atoms/atm.navigation-button/navigate-button.atm.styled";
import { NavigateButtonText } from "../../atoms/atm.navigation-button/navigate-button-text.atm.styled";

interface NavigateButtonComponentProps {
  label: string;
  onPress?: () => void;
  routeName?: string;
  params?: any;
  color?: string;
  hidePadding?: boolean;
}

interface AppRouteParams {
  [key: string]: any;
}

export const NavigateButtonComponent = (props: NavigateButtonComponentProps) => {
  const navigation = useNavigation();
  const { label, onPress, routeName, params, color, hidePadding } = props;

  const navigateTo = (route?: string, param?: AppRouteParams) => {
    navigation.navigate({ name: route, param } as never);
  }

  return (
    <NavigateContainer hasPadding={!hidePadding}>
      <NavigateButton
        onPress={onPress ? onPress : () => navigateTo(routeName, params)}
        color={color}
      >
        <NavigateButtonText color={color}>{label}</NavigateButtonText>
      </NavigateButton>
    </NavigateContainer>
  )
}