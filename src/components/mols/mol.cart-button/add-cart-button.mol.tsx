import { useNavigation } from "@react-navigation/native";
import React, { Text } from "react-native";
import { AddCartButton } from "../../atoms/atm.cart-button/add-cart-button.atm.styled";
import { AddCartButtonText } from "../../atoms/atm.cart-button/add-cart-button-text.atm.styled";

interface NavHighlightButtonComponentProps {
  label: string;
  onPress?: () => void;
  routeName?: string;
  params?: any;
  color?: string;
  hidePadding?: boolean;
}

export const NavHighlightButtonComponent = (props: NavHighlightButtonComponentProps) => {
  const navigation = useNavigation();
  const { label, onPress, routeName, params, color, hidePadding } = props;

  const navigateTo = (route?: string, param?: any) => {
    navigation.navigate({ name: route, param } as never);
  }

  return (
    <AddCartButton
      onPress={onPress ? onPress : () => navigateTo(routeName, params)}
      color={color}
    >
      <AddCartButtonText color={color}>{label}</AddCartButtonText>
    </AddCartButton>
  )
}