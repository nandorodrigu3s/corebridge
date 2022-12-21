import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NFTCard } from "../../mols/nft-card/nft-card.mol";

interface CartNFTListComponentProps {
  cardsData?: NFTData[];
}

export const CartNFTList = (props: CartNFTListComponentProps) => {
  const { cardsData } = props;

  const renderCards = (({ item }) => {
    return (
      <NFTCard
        nft={item}
        hideDescription
        hideButton
        disabled={true}
      />
    );
  });

  return (
    <FlatList
      data={cardsData}
      renderItem={renderCards}
      keyExtractor={item => (item.id).toString()}
    />
  )
}