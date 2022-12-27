import styled from "styled-components/native";
import { SubmitButton } from "../atm.submit-button/submit-button.atm.styled";

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

interface NavigateTopButtonProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
  buttonWidth?: number;
  hasLargePadding?: boolean;
  hasPaddingLeft?: boolean;
  justifyCon?: boolean;
  alignIt?: boolean;
}

export const NavigateTopButton = styled.TouchableOpacity<NavigateTopButtonProps>`
  padding: 12px;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 16px;
  ${(props) => props.justifyCon && 'justify-content: center;'};
  ${(props) => props.alignIt && 'align-items: center;'};
  ${(props) => props.hasLargePadding && 'padding: 16px;'};
  ${(props) => props.hasPaddingLeft && 'padding-left: 48px;'};
  width: ${(props: NavigateTopButtonProps) => props.buttonWidth 
    ? `${props.buttonWidth}% !important;`
    : '50%'
  };
  ${(props) => props.color && `color: ${props.color};`};
  background-color: ${(props: NavigateTopButtonProps) => props.bgColor ?? '#FFD047'};
  ${(props: NavigateTopButtonProps) => props.radiusBorderValue
    ? `border-radius: ${props.radiusBorderValue}px;`
    : null
  };
`;