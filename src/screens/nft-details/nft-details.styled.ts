import styled from 'styled-components/native';
import { NFTCardContent } from '../../components/atoms/atm.containers/nft-card-container.atm.styled';
import { NFTCardText } from '../../components/atoms/atm.nft-card/card-text.atm.styled';

interface DetailsButtonsContainerProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
}

interface DetailsScreenContainerProps {
  paddingValue?: number;
  noPadding?: boolean;
  hasBorder?: boolean;
}

export const DetailsScreenContainer = styled.View<DetailsScreenContainerProps>`
  flex-shrink: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: DetailsScreenContainerProps) => props.hasBorder && 'border: 2px solid black'};
  padding: ${(props: DetailsScreenContainerProps) => props.noPadding
      ? '0px'
      : props.paddingValue ? `${props.paddingValue}px` : '16px'
    }
  margin-bottom: 8px;
`;

export const DetailsScreenContent = styled(DetailsScreenContainer)`
  flex-direction: column;
`;

interface NFTDetailsTextProps {
  color?: string;
  fontSize?: number;
  isBold?: boolean;
  noCenter?: boolean;
}

export const NFTDetailsText = styled.Text<NFTDetailsTextProps>`
  ${(props: NFTDetailsTextProps) => !props.noCenter
    ? 'text-align: center;'
    : null
  };
  color: ${(props: NFTDetailsTextProps) => props.color ?? '#232F1C'};
  font-size: ${(props: NFTDetailsTextProps) => props.fontSize
    ? `${String(props.fontSize)}px` : '14px'};
  font-weight: ${(props: NFTDetailsTextProps) => props.isBold
    ? 'bold' : 'normal'};
`;

export const DetailsButtonsContainer = styled.View<DetailsButtonsContainerProps>`
  flex-direction: row;
  justify-content: space-around;
  width: 100%
  ${(props: DetailsButtonsContainerProps) => props.hasBorder && 'border: 2px solid black'};
  ${(props: DetailsButtonsContainerProps) => props.hasPadding && 'padding: 16px'};
`;