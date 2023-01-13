import styled from 'styled-components/native';

export interface HeaderContainerProps {
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
  elevation?: number;
  paddingHorizontal?: number;
}

export const HeaderContainer = styled.View<HeaderContainerProps>`
  ${(props: HeaderContainerProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: HeaderContainerProps) => props.containerHeight
    ? `height: ${props.containerHeight}%;`
    : 'auto'
  };
  ${(props: HeaderContainerProps) => props.hasBorder && 'border: 5px solid black;'};
  ${(props: HeaderContainerProps) => props.hasPadding && 'padding: 8px'};
  ${(props: HeaderContainerProps) => props.paddingHorizontal && `padding-left: ${props.paddingHorizontal}px`};
  ${(props: HeaderContainerProps) => props.paddingHorizontal && `padding-right: ${props.paddingHorizontal}px`};
  ${(props: HeaderContainerProps) => props.marginUp && `margin-top: ${props.marginUp}px`};
  ${(props: HeaderContainerProps) => props.marginDown &&`margin-bottom: ${props.marginDown}px`};
  ${(props: HeaderContainerProps) => props.flexible
    ? `flex: 1`
    : null
  };
  ${(props: HeaderContainerProps) => props.justifyCon
    ? `justify-content: ${props.justifyCon};`
    : null
  };
  ${(props: HeaderContainerProps) => props.alignItem
    ? `align-items: ${props.alignItem};`
    : null
  };
  ${(props: HeaderContainerProps) => props.alignCon
    ? `align-content: ${props.alignCon};`
    : null
  };
  ${(props: HeaderContainerProps) => props.elevation
    ? `elevation: ${props.elevation};`
    : null
  };
  ${(props: HeaderContainerProps) => props.elevation && `box-shadow: 10px 5px 5px #000;`};
`;