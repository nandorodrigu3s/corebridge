import styled from "styled-components/native";

interface LoginSubmitButtonTextProps {
  color?: string;
  fontSize?: number;
}

export const LoginSubmitButtonText = styled.Text<LoginSubmitButtonTextProps>`
  text-transform: uppercase;
  font-weight: bold;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  color: ${(props: LoginSubmitButtonTextProps) => props.color
    ? `${props.color}`
    : '#FFF'};
`;