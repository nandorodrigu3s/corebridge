import React from "react";
import { Alert, Dimensions, Text, TextInput, TouchableOpacity } from "react-native";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { useForm, Controller } from "react-hook-form";
import { SubmitButton } from "../../components/atoms/atm.submit-button/submit-button.atm.styled";
import { SubmitButtonText } from "../../components/atoms/atm.submit-button/submit-button-text.atm.styled";
import { LoginContainer } from "../../components/atoms/atm.containers/login-container.atm.styled";
import { SubmitErrorText } from "../../components/atoms/atm.submit-button/submit-error-text.atm.styled";
import { AppImage } from "../../components/atoms/atm.image/image.atm";
import AppImageResource from '../../assets/images';
import { Akira } from 'react-native-textinput-effects';
import { InputPassword } from "../../components/organ/organ.password-input/password-input.organ";


type LoginFormData = {
  username: string;
  password: string;
}

const Login = () => {
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.75);

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const onLogin = (data: LoginFormData) => {
    console.log(data);
  }

  return (
    <Container
      addFlex
    >
      <LoginContainer
        flexible
        justifyCon="center"
        alignItem="center"
      >
        <LoginContainer
        >
          <AppImage 
            source={`${AppImageResource.logo}`}
            sourceWidth={(imageSourceWidth).toString()}
            sourceHeight={(imageSourceWidth).toString()}
          />
        </LoginContainer>
        <LoginContainer
          containerWidth={85}
          marginUp={4}
          marginDown={4}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Akira
                onChangeText={onChange}
                value={value}
                label={'username'}
                borderColor={'#000'} // this is used as active and passive border color
                inputPadding={4}
                labelHeight={24}
                labelStyle={{ color: '#ac83c4' }}
              />
            )}
            name="username"
          />
          {errors.username && <SubmitErrorText>This is required.</SubmitErrorText>}
        </LoginContainer>
        <LoginContainer
          containerWidth={85}
          marginUp={4}
          marginDown={4}
        >
          <InputPassword
            control={control}
            labelColor="#ac83c4"
            errorMessage="Este campo é obrigatório"
            passwordError={errors.password}
          />
        </LoginContainer>
        <LoginContainer
          containerWidth={85}
          marginUp={4}
          marginDown={4}
        >
          
        </LoginContainer>
        <SubmitButton
          onPress={handleSubmit(onLogin)}
          buttonWidth={75}
          alignIt
        >
          <SubmitButtonText fontSize={15}>
            Entrar
          </SubmitButtonText>
        </SubmitButton>
      </LoginContainer>
    </Container>
  )
};


export default Login;