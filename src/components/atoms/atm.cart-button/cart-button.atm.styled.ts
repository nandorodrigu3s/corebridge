import styled from "styled-components/native";

interface CartButtonProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
}

export const CartButton = styled.TouchableOpacity<CartButtonProps>`
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props: CartButtonProps) => props.bgColor ?? '#4FCA04'};
  color: ${(props: CartButtonProps) => props.color ?? '#FFF'};
  ${(props: CartButtonProps) => props.radiusBorderValue
    ? `border-radius: ${String(props.radiusBorderValue)}px;`
    : null
  };
`;