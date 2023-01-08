import styled from "styled-components/native";

interface CartTotalPurchaseTextProps {
  color?: string;
  fontSize?: number;
  isBold?: boolean;
  noCenter?: boolean;
  isAbsolute?: boolean;
}

export const CartTotalPurchaseText = styled.Text<CartTotalPurchaseTextProps>`
  ${(props: CartTotalPurchaseTextProps) => !props.noCenter
    ? 'text-align: center;'
    : null
  };
  color: ${(props: CartTotalPurchaseTextProps) => props.color ?? '#232F1C'};
  font-size: ${(props: CartTotalPurchaseTextProps) => props.fontSize
    ? `${String(props.fontSize)}px` : '14px'};
  font-weight: ${(props: CartTotalPurchaseTextProps) => props.isBold
    ? 'bold' : 'normal'};
`;