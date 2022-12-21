import styled from "styled-components/native";

interface NavigateButtonTextProps {
  color?: string;
}

export const NavigateButtonText = styled.Text<NavigateButtonTextProps>`
  color: ${(props: NavigateButtonTextProps) => props.color ?? '#FFF'};
`;

interface NavigateButtonHLTextProps {
  color?: string;
}

export const NavigateButtonHLText = styled.Text<NavigateButtonHLTextProps>`
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props: NavigateButtonHLTextProps) => props.color ?? '#FFF'};
`;