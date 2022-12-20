import styled from 'styled-components/native';

interface ContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  ${(props: ContainerProps) => props.hasBorder && 'border: 5px solid black'};
  ${(props: ContainerProps) => props.hasPadding && 'padding: 8px'};
`;