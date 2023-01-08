import styled from 'styled-components/native';

export interface ContainerProps {
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
}

export const Container = styled.View<ContainerProps>`
  ${(props: ContainerProps) => props.bgColor && `background-color: ${props.bgColor};`};
  ${(props: ContainerProps) => props.direction && `flex-direction: ${props.direction};`};
  ${(props: ContainerProps) => props.justifyCon && 'justify-content: center'};
  ${(props: ContainerProps) => props.justifyBetween && 'justify-content: space-between'};
  ${(props: ContainerProps) => props.alignIt && 'align-items: center'};
  ${(props: ContainerProps) => props.containerHeight
    ?  `height: ${props.containerHeight}%;`
    : 'auto'
  };
  ${(props: ContainerProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: ContainerProps) => !props.noFlex
    ? props.addFlex ? 'flex: 1;' : 'flex-grow: 1;'
    : null
  };
  ${(props: ContainerProps) => props.hasBorder && 'border: 5px solid black;'};
  ${(props: ContainerProps) => props.hasPadding && 'padding: 8px'};
`;