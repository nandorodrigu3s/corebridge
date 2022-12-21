import styled from "styled-components/native";

interface AddCartButtonProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
}

export const AddCartButton = styled.TouchableOpacity<AddCartButtonProps>`
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props: AddCartButtonProps) => props.bgColor ?? '#4FCA04'};
  color: ${(props: AddCartButtonProps) => props.color ?? '#FFF'};
  ${(props: AddCartButtonProps) => props.radiusBorderValue
    ? `border-radius: ${String(props.radiusBorderValue)}px;`
    : null
  };
`;