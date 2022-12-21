import styled from 'styled-components/native';

interface NFTCardContainerProps {
  paddingValue?: number;
  noPadding?: boolean;
  hasBorder?: boolean;
}

export const NFTCardContainer = styled.View<NFTCardContainerProps>`
  flex-shrink: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: NFTCardContainerProps) => props.hasBorder && 'border: 2px solid black'};
  padding: ${(props: NFTCardContainerProps) => props.noPadding
    ? '0px'
    : props.paddingValue ? `${props.paddingValue}px` : '16px'
  }
  margin-bottom: 8px;
`;

export const NFTCardContent = styled(NFTCardContainer)`
  flex-direction: column
`;