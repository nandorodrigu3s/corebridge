import styled from "styled-components/native";

interface SubmitLoginButtonProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
  buttonWidth?: number;
  hasLargePadding?: boolean;
  hasPaddingLeft?: boolean;
}

export const SubmitLoginButton = styled.TouchableOpacity<SubmitLoginButtonProps>`
  padding: 12px;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 16px;
  ${(props) => props.hasLargePadding && 'padding: 16px'};
  ${(props) => props.hasPaddingLeft && 'padding-left: 48px'};
  width: ${(props: SubmitLoginButtonProps) => props.buttonWidth 
    ? `${props.buttonWidth}%`
    : '50%'
  };
  background-color: ${(props: SubmitLoginButtonProps) => props.bgColor ?? '#FFD047'};
  ${(props: SubmitLoginButtonProps) => props.radiusBorderValue
    ? `border-radius: ${String(props.radiusBorderValue)}px`
    : null
  };
`;