import React, { useRef, useState } from "react";
import { Container } from "../../atoms/atm.containers/container.atm.styled";
import { ProfileContainer } from "../../atoms/atm.containers/profile-container.atm.styled";
import { AppImage } from "../../atoms/atm.image/image.atm";
import AppImageResource from '../../../assets/images';
import { Alert, Dimensions, TouchableHighlight, TouchableOpacity } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { FumiInput } from "../../atoms/atm.input/fumi-input.atm";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';

interface ProfileComponentProps {
  countNFT?: number;
  onPressWallet?: () => void,
}

export const ProfileComponent = (props: ProfileComponentProps) => {
  
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.75);
  const lottieWidth = (width * 0.12);
  return (
    <Container
      justifyCon
      alignIt
      hasBorder
    >
      <ProfileContainer
        justifyCon={"center"}
        alignItem={"center"}
      >
        <AppImage
          source={`${AppImageResource.logo}`}
          sourceWidth={(imageSourceWidth).toString()}
          sourceHeight={(imageSourceWidth).toString()}
        />
      </ProfileContainer>
      <ProfileContainer
        alignCon="center"
        justifyCon="center"
        containerWidth={100}
        alignItem={"center"}
      >
        <FumiInput
          inputLabel="Nome"
          inputIcon="user-circle"
          inputIconClass={FontAwesomeIcon}
          inputValue="Fernando Rodrigues"
          inputIconEditable={false}
        />
        <FumiInput
          inputLabel="Nível"
          inputIcon="superpowers"
          inputIconClass={FontAwesomeIcon}
          inputValue="Trader Expert"
          inputIconEditable={false}
        />
        <TouchableOpacity 
          onPress={props.onPressWallet}
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Lottie 
            source={AppImageResource.json.o1b1nc}
            autoPlay
            loop
            style={{
              position: "absolute",
              zIndex: 1001,
              right: 20,
              width: lottieWidth,
              height: lottieWidth,
              maxWidth: 90,
              maxHeight: 90,
            }}
          />
          <FumiInput
            inputLabel="Portifólio"
            inputIcon="wallet-outline"  
            inputIconClass={Ionicons}
            inputValue={`${props.countNFT} ${props.countNFT && props.countNFT > 1 ? ' NTFs ' : ' NFT '}`}
            inputIconEditable={false}
          />
        </TouchableOpacity>
      </ProfileContainer>
    </Container>
  )
}
