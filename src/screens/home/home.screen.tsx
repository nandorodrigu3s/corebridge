import React, { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NFTCardList } from "../../components/organ/organ.nft-list/nft-list.organ";
import { constData } from "../../system/constants";

const Home = () => {
  const onPress = () => {
    console.log("estoy aqui");
  }

  return (
    <SafeAreaView>
      <Container hasPadding hasBorder>
        <NFTCardList
          onPressAddCart={onPress}
          cardsData={constData}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Home;