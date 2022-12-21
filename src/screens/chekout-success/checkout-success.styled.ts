import styled from 'styled-components/native';
import { NFTCardContent } from '../../components/atoms/atm.containers/nft-card-container.atm.styled';
import { NFTCardText } from '../../components/atoms/atm.nft-card/card-text.atm.styled';

interface CheckoutSuccessButtonProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
}

interface CheckoutSuccessContainerProps {
  paddingValue?: number;
  noPadding?: boolean;
  hasBorder?: boolean;
}

export const CheckoutSuccessContainer = styled.View<CheckoutSuccessContainerProps>`
  flex-shrink: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: CheckoutSuccessContainerProps) => props.hasBorder && 'border: 2px solid black'};
  padding: ${(props: CheckoutSuccessContainerProps) => props.noPadding
      ? '0px'
      : props.paddingValue ? `${props.paddingValue}px` : '16px'
    }
  margin-bottom: 8px;
`;

export const CheckoutSuccessContent = styled(CheckoutSuccessContainer)`
  flex-direction: column;
  align-content: center;
`;

interface CheckoutSuccessTextProps {
  color?: string;
  fontSize?: number;
  isBold?: boolean;
  noCenter?: boolean;
}

export const CheckoutSuccessText = styled.Text<CheckoutSuccessTextProps>`
  ${(props: CheckoutSuccessTextProps) => !props.noCenter
    ? 'text-align: center;'
    : null
  };
  color: ${(props: CheckoutSuccessTextProps) => props.color ?? '#232F1C'};
  font-size: ${(props: CheckoutSuccessTextProps) => props.fontSize
    ? `${String(props.fontSize)}px` : '14px'};
  font-weight: ${(props: CheckoutSuccessTextProps) => props.isBold
    ? 'bold' : 'normal'};
`;

export const CheckoutSuccessButtonContainer = styled.View<CheckoutSuccessButtonProps>`
  flex-direction: row;
  justify-content: space-around;
  width: 100%
  ${(props: CheckoutSuccessButtonProps) => props.hasBorder && 'border: 2px solid black'};
  ${(props: CheckoutSuccessButtonProps) => props.hasPadding && 'padding: 16px'};
`;