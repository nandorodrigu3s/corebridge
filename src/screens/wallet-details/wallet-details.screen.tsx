import React, { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NothingHere } from "../../components/mols/mol.nothing-here/nothing-here.mol";
import { NFTCardList } from "../../components/organ/organ.nft-list/nft-list.organ";
import { constData } from "../../system/constants";
import { NFTData } from "../../system/interfaces/common.interfaces";

interface WalletDetailsProps {
  nfts?: NFTData[];
}
const WalletDetails = (props: WalletDetailsProps) => {
  const onPress = () => {
    console.log("estoy aqui");
  }
  return (
    <SafeAreaView>
      <Container hasPadding hasBorder>
        { props?.route?.params?.nfts && props?.route?.params?.nfts?.length
          ?
            <NFTCardList
              onPressAddCart={onPress}
              cardsData={props?.route?.params?.nfts}
              hideAddButton
            />
          : <NothingHere hideButton title={"Ops... Nada por aqui"} />
        }
      </Container>
    </SafeAreaView>
  );
};

export default WalletDetails;