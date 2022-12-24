import styled from 'styled-components/native';

interface NothingHereButtonProps {
  hasPadding?: boolean;
  hasBorder?: boolean;
}

interface NothingHereContainerProps {
  paddingValue?: number;
  noPadding?: boolean;
  hasBorder?: boolean;
}

export const NothingHereContainer = styled.View<NothingHereContainerProps>`
  flex-shrink: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: NothingHereContainerProps) => props.hasBorder && 'border: 2px solid black'};
  padding: ${(props: NothingHereContainerProps) => props.noPadding
      ? '0px'
      : props.paddingValue ? `${props.paddingValue}px` : '16px'
    }
  margin-bottom: 8px;
`;

export const NothingHereContent = styled(NothingHereContainer)`
  flex-direction: column;
  align-content: center;
`;

interface NothingHereTextProps {
  color?: string;
  fontSize?: number;
  isBold?: boolean;
  noCenter?: boolean;
}

export const NothingHereText = styled.Text<NothingHereTextProps>`
  ${(props: NothingHereTextProps) => !props.noCenter
    ? 'text-align: center;'
    : null
  };
  color: ${(props: NothingHereTextProps) => props.color ?? '#232F1C'};
  font-size: ${(props: NothingHereTextProps) => props.fontSize
    ? `${String(props.fontSize)}px` : '14px'};
  font-weight: ${(props: NothingHereTextProps) => props.isBold
    ? 'bold' : 'normal'};
`;

export const NothingHereButtonContainer = styled.View<NothingHereButtonProps>`
  flex-direction: row;
  justify-content: space-around;
  width: 100%
  ${(props: NothingHereButtonProps) => props.hasBorder && 'border: 2px solid black'};
  ${(props: NothingHereButtonProps) => props.hasPadding && 'padding: 16px'};
`;