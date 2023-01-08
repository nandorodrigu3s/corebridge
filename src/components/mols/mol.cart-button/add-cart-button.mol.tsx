import { useNavigation } from "@react-navigation/native";
import React, { Text } from "react-native";
import { CartButton } from "../../atoms/atm.cart-button/cart-button.atm.styled";
import { CartButtonText } from "../../atoms/atm.cart-button/button-text.atm.styled";

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
    <CartButton
      onPress={onPress ? onPress : () => navigateTo(routeName, params)}
      color={color}
    >
      <CartButtonText color={color}>{label}</CartButtonText>
    </CartButton>
  )
}