import React from "react";
import { ActivityIndicator } from "react-native";
import { SubmitButtonText } from "../../atoms/atm.submit-button/submit-button-text.atm.styled";
import { SubmitButton } from "../../atoms/atm.submit-button/submit-button.atm.styled";

interface SubmitButtonComponentProps {
  onPress: () => void;
  buttonWidth?: number;
  labelFontSize?: number;
  alignIt?: boolean;
  loadingButton?: boolean;
  loadingSize?: number;
  loadingColor?: string;
  textLabel?: string;
  bgColor?: string;
  radiusBorderValue?: number;
  hasLargePadding?: boolean;
  hasPaddingLeft?: boolean;
  justifyCon?: boolean;
}
export const SubmitButtonComponent = ({
  onPress,
  buttonWidth,
  labelFontSize,
  alignIt,
  loadingButton,
  loadingSize,
  loadingColor,
  textLabel,
  bgColor,
  radiusBorderValue,
  hasLargePadding,
  hasPaddingLeft,
  justifyCon,
}: SubmitButtonComponentProps) => {
  return (
    <SubmitButton
      onPress={onPress}
      buttonWidth={buttonWidth ?? 75}
      alignIt={alignIt}
      bgColor={bgColor}
      radiusBorderValue={radiusBorderValue}
      hasLargePadding={hasLargePadding}
      hasPaddingLeft={hasPaddingLeft}
      justifyCon={justifyCon}
    >
      <SubmitButtonText fontSize={labelFontSize ?? 15}>
        {loadingButton
          ? <ActivityIndicator size={loadingSize ?? 20} color={loadingColor ?? '#FFF'} />
          : textLabel ?? "Finalizar Compra"
        }
      </SubmitButtonText>
    </SubmitButton>
  );
}