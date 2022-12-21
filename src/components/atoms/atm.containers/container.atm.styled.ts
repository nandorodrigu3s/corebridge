import styled from 'styled-components/native';

export interface ContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
  addFlex?: boolean;
  containerWidth?: number;
  containerHeight?: number;
}

export const Container = styled.View<ContainerProps>`
  height: auto;
  ${(props: ContainerProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: ContainerProps) => props.addFlex ? 'flex: 1;' : 'flex-grow: 1;'};
  ${(props: ContainerProps) => props.hasBorder && 'border: 5px solid black;'};
  ${(props: ContainerProps) => props.hasPadding && 'padding: 8px'};
`;