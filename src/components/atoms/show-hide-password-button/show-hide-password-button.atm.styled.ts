import styled from "styled-components/native";


interface ShowHidePasswordButtonProps {
  hideButton?: boolean;
}


export const ShowHidePasswordButton = styled.TouchableOpacity<ShowHidePasswordButtonProps>`
  position: absolute;
  right: 0;
  background-color: 'transparent';
  ${(props) => props.hideButton ? `opacity: 0` : '1'};
  ${(props) => props.hideButton && `disabled: ${props.hideButton}`};
`;