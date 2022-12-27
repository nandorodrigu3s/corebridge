import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { CartContext } from "../../../contexts";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NFTCard } from "../../mols/nft-card/nft-card.mol";

interface NFTCardListComponentProps {
  hideAddButton?: boolean;
  cardsData?: NFTData[];
  onPressCard?: () => void;
  onPressAddCart?: () => void;
}

export const NFTCardList = (props: NFTCardListComponentProps) => {
  const { onPressAddCart, cardsData, hideAddButton } = props;
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
        onPress={() => pressCard(item)}
        nft={item}
        circle
        hideAddButton={hideAddButton}
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