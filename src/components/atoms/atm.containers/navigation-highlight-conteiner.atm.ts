import styled from 'styled-components/native';

interface NavHighlightContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
}

export const NavHighlightContainer = styled.View<NavHighlightContainerProps>`
  ${(props: NavHighlightContainerProps) => props.hasBorder && 'border: 5px solid black'};
  ${(props: NavHighlightContainerProps) => props.hasPadding && 'padding: 8px'};
`;