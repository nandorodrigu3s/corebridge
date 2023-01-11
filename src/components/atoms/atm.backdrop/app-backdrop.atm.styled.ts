import styled from 'styled-components/native';

export interface AppBackdropProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
  addFlex?: boolean;
  justifyCon?: boolean;
  justifyBetween?: boolean;
  alignIt?: boolean;
  noFlex?: boolean;
  containerWidth?: number;
  containerHeight?: number;
  direction?: string;
  bgColor?: string;
  visible?: boolean;
}

export const AppBackdrop = styled.View<AppBackdropProps>`
  position: absolute;
  opacity: 0.6;
  z-index: 5000;
  ${(props: AppBackdropProps) => props.bgColor && `background-color: ${props.bgColor};`};
  ${(props: AppBackdropProps) => props.direction && `flex-direction: ${props.direction};`};
  ${(props: AppBackdropProps) => props.justifyCon && 'justify-content: center'};
  ${(props: AppBackdropProps) => props.justifyBetween && 'justify-content: space-between'};
  ${(props: AppBackdropProps) => props.alignIt && 'align-items: center'};
  ${(props: AppBackdropProps) => props.containerHeight
    ?  `height: ${props.containerHeight}%;`
    : 'auto'
  };
  ${(props: AppBackdropProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: AppBackdropProps) => !props.noFlex
    ? props.addFlex ? 'flex: 1;' : 'flex-grow: 1;'
    : null
  };
  ${(props: AppBackdropProps) => props.hasBorder && 'border: 5px solid black;'};
  ${(props: AppBackdropProps) => props.hasPadding && 'padding: 8px'};
`;