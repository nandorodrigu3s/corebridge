import styled from "styled-components/native";

interface SubmitErrorTextProps {
  color?: string;
  fontSize?: number;
}

export const SubmitErrorText = styled.Text<SubmitErrorTextProps>`
  font-weight: 700;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  color: ${(props: SubmitErrorTextProps) => props.color
  ? `${props.color};`
  : '#E13000'};
`;