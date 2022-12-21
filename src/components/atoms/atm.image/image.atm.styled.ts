import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface ImageStyledProps {
  imgWidth?: string;
  imgHeight?: string;
  borderRadiusValue?: string;
  circle?: boolean;
}

const { width } = Dimensions.get("screen");
const calcWidthData = (width * 0.30);

export const ImageStyled = styled.Image<ImageStyledProps>`
  width: ${(props: ImageStyledProps) => props.imgWidth && !props.circle
    ? `${props.imgWidth}px`
    : `${calcWidthData}px`};
  height: ${(props: ImageStyledProps) => props.imgHeight && !props.circle
    ? `${props.imgHeight}px`
    : `${calcWidthData}px`};
  border-radius: ${(props: ImageStyledProps) => !props.circle
    ? `${props.borderRadiusValue ?? '0'}px`
    : `${(calcWidthData/2)}px`};
`;