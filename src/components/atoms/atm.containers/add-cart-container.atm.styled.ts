import styled from 'styled-components/native';
import { Container } from './container.atm.styled';

export const AddCartContainer = styled(Container)`
  ${(props) => props.hasBorder && 'border: 2px solid black'};
  ${(props) => props.hasPadding && 'padding: 16px'};
`;