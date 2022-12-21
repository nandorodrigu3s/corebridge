import styled from "styled-components/native";

interface NavigateButtonProps {
  bgColor?: string;
  color?: string;
}

export const NavigateButton = styled.TouchableHighlight<NavigateButtonProps>`
  background-color: ${(props: NavigateButtonProps) => props.bgColor ?? '#14CB7B'};
  color: ${(props: NavigateButtonProps) => props.color ?? '#FFF'};
`;


interface NavigateButtonHLProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
}

export const NavigateButtonHL = styled.TouchableOpacity<NavigateButtonHLProps>`
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props: NavigateButtonHLProps) => props.bgColor ?? '#4FCA04'};
  color: ${(props: NavigateButtonHLProps) => props.color ?? '#FFF'};
  ${(props: NavigateButtonHLProps) => props.radiusBorderValue
    ? `border-radius: ${String(props.radiusBorderValue)}px`
    : null
  };
`;