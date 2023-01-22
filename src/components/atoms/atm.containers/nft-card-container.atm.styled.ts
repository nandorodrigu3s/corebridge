import styled from 'styled-components/native';

interface NFTCardContainerProps {
  containerWidth?: number;
  paddingValue?: number;
  noPadding?: boolean;
  hasBorder?: boolean;
  noMargin?: boolean;
}

export const NFTCardContainer = styled.View<NFTCardContainerProps>`
  flex-shrink: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ${(props: NFTCardContainerProps) => !props.noMargin && 'margin-bottom: 8px;'};
  ${(props: NFTCardContainerProps) => props.hasBorder && 'border: 2px solid black'};
  padding: ${(props: NFTCardContainerProps) => props.noPadding
    ? '0px'
    : props.paddingValue ? `${props.paddingValue}px` : '16px'
  }
`;

export const NFTCardContent = styled(NFTCardContainer)`
  flex-direction: column;
  overflow: hidden;
  ${(props: NFTCardContainerProps) => props.containerWidth && `width: ${props.containerWidth}%;`};
  ${(props: NFTCardContainerProps) => props.containerWidth && `min-width: ${props.containerWidth}%;`};
`;