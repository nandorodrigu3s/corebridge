import React from 'react-native';
import { ImageStyled } from '../atm.image/image.atm.styled';

interface ImageProps {
  source: string;
  isUri?: boolean;
  sourceWidth?: string;
  sourceHeight?: string;
  circle?: boolean;
  roundedBorder?: boolean;
}

export const AppImage = (props: ImageProps) => {
  const { isUri } = props;
  return (
    <ImageStyled 
      source={isUri ? { uri: props.source} : +props.source}
      imgWidth={props.sourceWidth}
      imgHeight={props.sourceHeight}
    />
  );
}