import React, { useEffect, useState } from "react";
import { Control, Controller, FieldError, FieldErrorsImpl } from "react-hook-form";
import { Akira } from "react-native-textinput-effects";
import { ShowHidePasswordButton } from "../../atoms/show-hide-password-button/show-hide-password-button.atm.styled";
import Icon from "react-native-vector-icons/FontAwesome";
import { SubmitErrorText } from "../../atoms/atm.submit-button/submit-error-text.atm.styled";



interface InputPasswordProps {
  control: Control<any, any>,
  passwordError?: FieldError;
  labelColor: string;
  hideError?: boolean;
  errorMessage?: string;
}

export const InputPassword = (props: InputPasswordProps) => {
  const [hideButton, setHideButton] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordIcon, setHidePasswordIcon] = useState("eye-slash");
  const validationMessage = props?.errorMessage ? props.errorMessage : "This field is required";

  const showHidePasswordButton = (e: string) => {
    if (e.length < 1 && !hideButton) {
      setHideButton(true);
    } else {
      hideButton && setHideButton(false);
    }
  }

  useEffect(() => {
    !hidePassword && !hideButton && setHidePasswordIcon("eye-slash");
    hidePassword && !hideButton && setHidePasswordIcon("eye");
  });

  return (
    <>
      <Controller
        control={props.control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <Akira
              onChangeText={(e) => {
                onChange(e);
                showHidePasswordButton(e);
              }}
              secureTextEntry={hidePassword}
              value={value}
              label={'password'}
              // this is used as active and passive border color
              borderColor={'#000'}
              inputPadding={4}
              labelHeight={24}
              labelStyle={{ color: `${props.labelColor}` }}
            />
            {!hideButton && <ShowHidePasswordButton
              onPress={() => setHidePassword(!hidePassword)}
              hideButton={hideButton}
            >
              <Icon name={hidePasswordIcon} color={`${props.labelColor}`} size={18} />
            </ShowHidePasswordButton>}
          </>
        )}
        name="password"
      />
      { !props?.hideError && props?.passwordError && <SubmitErrorText>{validationMessage}</SubmitErrorText> }
    </>
  )
}