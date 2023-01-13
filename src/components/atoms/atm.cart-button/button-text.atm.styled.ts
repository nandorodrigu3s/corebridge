import styled from "styled-components/native";

interface CartButtonTextProps {
  color?: string;
}

export const CartButtonText = styled.Text<CartButtonTextProps>`
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props: CartButtonTextProps) => props.color ?? '#FFF'};
`;