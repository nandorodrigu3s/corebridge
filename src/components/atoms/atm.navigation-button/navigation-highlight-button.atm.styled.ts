import styled from "styled-components/native";

interface NavHighlightButtonProps {
  bgColor?: string;
  color?: string;
}

export const NavHighlightButton = styled.TouchableHighlight<NavHighlightButtonProps>`
  background-color: ${(props: NavHighlightButtonProps) => props.bgColor ?? 'blue'};
  color: ${(props: NavHighlightButtonProps) => props.color ?? '#FFF'};
`;