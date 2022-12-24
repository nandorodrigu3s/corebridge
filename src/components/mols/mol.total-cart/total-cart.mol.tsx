import React from "react";
import { CartTotalPurchaseText } from "../../atoms/atm.cart/cart-total-purchase-text.atm.styled";
import { Container } from "../../atoms/atm.containers/container.atm.styled";

interface TotalCartComponentProps {
  totalPrice: string;
  bgColor?: string;
  totalTextColor?: string;
  valueTextColor?: string;
}
export const TotalCartComponent = (props: TotalCartComponentProps) => {
  return (
    <Container
      hasBorder
      noFlex
      containerHeight={10}
      direction={"row"}
      hasPadding
      justifyBetween
      alignIt
      bgColor={props.totalTextColor ?? "#33322C" }
    >
      <CartTotalPurchaseText isBold fontSize={24} color={props.totalTextColor ?? "#DBC11E"}>
        Total: 
      </CartTotalPurchaseText>
      <CartTotalPurchaseText isBold fontSize={18} color={props.valueTextColor ?? "#DBC11E"}>
        {props.totalPrice}
      </CartTotalPurchaseText>
    </Container>
  )
}