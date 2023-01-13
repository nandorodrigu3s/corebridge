import styled from "styled-components/native";

interface SubmitButtonProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
  buttonWidth?: number;
  hasLargePadding?: boolean;
  hasPaddingLeft?: boolean;
  justifyCon?: boolean;
  alignIt?: boolean;
}

export const SubmitButton = styled.TouchableOpacity<SubmitButtonProps>`
  padding: 12px;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 16px;
  ${(props) => props.justifyCon && 'justify-content: center;'};
  ${(props) => props.alignIt && 'align-items: center;'};
  ${(props) => props.hasLargePadding && 'padding: 16px;'};
  ${(props) => props.hasPaddingLeft && 'padding-left: 48px;'};
  width: ${(props: SubmitButtonProps) => props.buttonWidth 
    ? `${props.buttonWidth}%`
    : '50%'
  };
  background-color: ${(props: SubmitButtonProps) => props.bgColor ?? '#FFD047'};
  ${(props: SubmitButtonProps) => props.radiusBorderValue
    ? `border-radius: ${String(props.radiusBorderValue)}px`
    : null
  };
`;