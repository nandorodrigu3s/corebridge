import styled from 'styled-components/native';
import { Container } from './container.atm.styled';

interface NavigateContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
}

export const NavigateContainer = styled(Container)`
  ${(props) => props.hasBorder && 'border: 2px solid black'};
  ${(props) => props.hasPadding && 'padding: 8px'};
`;