import React from "react";
import { Alert, Dimensions, Text, TextInput, TouchableOpacity } from "react-native";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { useForm, Controller } from "react-hook-form";
import { SubmitLoginButton } from "../../components/atoms/atm.submit-button/submit-login-button.atm.styled";
import { LoginSubmitButtonText } from "../../components/atoms/atm.submit-button/submit-login-button-text.atm.styled";
import { LoginContainer } from "../../components/atoms/atm.containers/login-container.atm.styled";
import { SubmitErrorText } from "../../components/atoms/atm.submit-button/submit-error-text.atm.styled";
import { AppImage } from "../../components/atoms/atm.image/image.atm";
import AppImageResource from '../../assets/images';
import { Akira } from 'react-native-textinput-effects';
import Icon from "react-native-vector-icons/FontAwesome"
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
                // this is used as active and passive border color
                borderColor={'#000'}
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
          {/* <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Akira
                  onChangeText={onChange}
                  secureTextEntry={true}
                  value={value}
                  label={'password'}
                  // this is used as active and passive border color
                  borderColor={'#000'}
                  inputPadding={4}
                  labelHeight={24}
                  labelStyle={{ color: '#ac83c4' }}
                />
                <TouchableOpacity style={{position: "absolute", right: 0, backgroundColor: 'transparent'}}>
                  <Icon onPress={() => Alert.alert('oi')} name="eye-slash" color={'#ac83c4'} size={18} />
                </TouchableOpacity>
              </>
            )}
            name="password"
          />
          {errors.password && <SubmitErrorText>This is required.</SubmitErrorText>} */}
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