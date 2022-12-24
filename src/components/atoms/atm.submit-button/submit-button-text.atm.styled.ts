import styled from "styled-components/native";

interface SubmitButtonTextProps {
  color?: string;
  fontSize?: number;
}

export const SubmitButtonText = styled.Text<SubmitButtonTextProps>`
  text-transform: uppercase;
  font-weight: bold;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  color: ${(props: SubmitButtonTextProps) => props.color
    ? `${props.color}`
    : '#FFF'};
`;