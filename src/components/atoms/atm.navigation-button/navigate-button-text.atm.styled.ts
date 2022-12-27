import styled from "styled-components/native";

interface NavigateButtonTextProps {
  transformText?: boolean;
  fontWeight?: number | string;
  color?: string;
  fontSize?: number;
}

export const NavigateButtonText = styled.Text<NavigateButtonTextProps>`
  font-weight: ${(props: NavigateButtonTextProps) => props.fontWeight ?? 'bold;'};
  color: ${(props: NavigateButtonTextProps) => props.color ?? '#FFF;'};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`};
  ${(props) => props.transformText && `text-transform: uppercase;`};
`;

interface NavigateButtonHLTextProps {
  color?: string;
}

export const NavigateButtonHLText = styled.Text<NavigateButtonHLTextProps>`
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props: NavigateButtonHLTextProps) => props.color ?? '#FFF'};
`;