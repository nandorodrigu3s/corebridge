import styled from "styled-components/native";

interface AddCartButtonTextProps {
  color?: string;
}

export const AddCartButtonText = styled.Text<AddCartButtonTextProps>`
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props: AddCartButtonTextProps) => props.color ?? '#FFF'};
`;