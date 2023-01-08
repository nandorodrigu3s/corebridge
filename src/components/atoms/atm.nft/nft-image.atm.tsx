import React from 'react-native';
import { ImageStyled } from '../atm.image/image.atm.styled';

interface NFTImageProps {
  source: string;
  sourceWidth?: string;
  sourceHeight?: string;
  circle?: boolean;
  roundedBorder?: boolean;
}

export const NFTImage = (props: NFTImageProps) => {
  return (
    <ImageStyled
      source={{uri: props.source}}
      imgWidth={props.sourceWidth}
      imgHeight={props.sourceHeight}
      circle={props.circle}
    />
  );
}