import styled from "styled-components/native";

interface NFTCardTextProps {
  color?: string;
  fontSize?: number;
  isBold?: boolean;
  noCenter?: boolean;
}

export const NFTCardText = styled.Text<NFTCardTextProps>`
  ${(props: NFTCardTextProps) => !props.noCenter
    ? 'text-align: center;'
    : null
  };
  color: ${(props: NFTCardTextProps) => props.color ?? '#232F1C'};
  font-size: ${(props: NFTCardTextProps) => props.fontSize
    ? `${String(props.fontSize)}px` : '14px'};
  font-weight: ${(props: NFTCardTextProps) => props.isBold
    ? 'bold' : 'normal'};
`;