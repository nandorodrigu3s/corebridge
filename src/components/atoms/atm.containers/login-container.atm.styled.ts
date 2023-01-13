import styled from 'styled-components/native';

export interface LoginContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
  addFlex?: boolean;
  flexible?: boolean;
  radiusValue?: number;
  containerWidth?: number;
  containerHeight?: number;
  marginUp?: number;
  marginDown?: number;
  justifyCon?: string;
  alignCon?: string;
  alignItem?: string;

}

export const LoginContainer = styled.View<LoginContainerProps>`
  ${(props: LoginContainerProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: LoginContainerProps) => props.containerHeight
    ? `height: ${props.containerHeight}%;`
    : 'auto'
  };
  ${(props: LoginContainerProps) => props.hasBorder && 'border: 5px solid black;'};
  ${(props: LoginContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: LoginContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: LoginContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: LoginContainerProps) => props.marginUp && `margin-top: ${props.marginUp}px`};
  ${(props: LoginContainerProps) => props.marginDown &&`margin-bottom: ${props.marginDown}px`};
  ${(props: LoginContainerProps) => props.flexible
    ? `flex: 1`
    : null
  };
  ${(props: LoginContainerProps) => props.justifyCon
    ? `justify-content: ${props.justifyCon};`
    : null
  };
  ${(props: LoginContainerProps) => props.alignItem
    ? `align-items: ${props.alignItem};`
    : null
  };
  ${(props: LoginContainerProps) => props.alignCon
    ? `align-content: ${props.alignCon};`
    : null
  };
`;