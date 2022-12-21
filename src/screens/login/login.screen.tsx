import React from "react";
import { Dimensions, Text, TextInput } from "react-native";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { useForm, Controller } from "react-hook-form";
import { AppInput } from "../../components/atoms/atm.input/input.atm";
import { SubmitLoginButton } from "../../components/atoms/atm.submit-button/submit-login-button.atm.styled";
import { LoginSubmitButtonText } from "../../components/atoms/atm.submit-button/submit-login-button-text.atm.styled";
import { LoginContainer } from "../../components/atoms/atm.containers/login-container.atm.styled";
import { SubmitErrorText } from "../../components/atoms/atm.submit-button/submit-error-text.atm.styled";
import { AppImage } from "../../components/atoms/atm.image/image.atm";
import AppImageResource from '../../assets/images';



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
      password: ''
    }
  });

  const onLogin = () => {
    console.log()
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
              maxLength: 20
            }}
            render={({ field: { onChange, value } }) => (
              <AppInput
                radiusValue={8}
                onChangeText={onChange}
                value={value}
                placeholder={"username"}
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
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 20
            }}
            render={({ field: { onChange, value } }) => (
              <AppInput
                radiusValue={8}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                placeholder={"password"}
              />
            )}
            name="password"
          />
          {errors.password && <SubmitErrorText>This is required.</SubmitErrorText>}
        </LoginContainer>
        <SubmitLoginButton
          onPress={handleSubmit(onLogin)}
          buttonWidth={75}
          hasPaddingLeft
        >
          <LoginSubmitButtonText fontSize={15}>
            Entrar
          </LoginSubmitButtonText>
        </SubmitLoginButton>
      </LoginContainer>
    </Container>
  )
};


export default Login;

// const pressCard = (item: NFTData) => {
//   navigating.navigate(
//     {
//       name: "Login",
//       params: {}
//   } as never)
// }