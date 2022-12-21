import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NFTCard } from "../../mols/nft-card/nft-card.mol";

interface NFTCardListComponentProps {
  cardsData?: NFTData[];
  onPressCard?: () => void;
  onPressAddCart: () => void;
}

export const NFTCardList = (props: NFTCardListComponentProps) => {
  const { onPressCard, onPressAddCart, cardsData } = props;
  const navigating = useNavigation();

  const pressCard = (item: NFTData) => {
    navigating.navigate(
      {
        name: "NFTDetails",
        params: {
          nft: item
        }
    } as never)
  }

  const renderCards = (({ item }) => {
    return (
      <NFTCard
        onPressAddCart={onPressAddCart}
        onPress={onPressCard ? onPressCard : () => pressCard(item)}
        nft={item}
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