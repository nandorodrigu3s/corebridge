import styled from "styled-components/native";

interface NavHighlightTextButtonProps {
  color?: string;
}

export const NavHighlightTextButton = styled.Text<NavHighlightTextButtonProps>`
  color: ${(props: NavHighlightTextButtonProps) => props.color ?? '#FFF'};
`;