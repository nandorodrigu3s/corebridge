import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { CartContext } from "../../../contexts";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NFTCard } from "../../mols/nft-card/nft-card.mol";

interface NFTCardListComponentProps {
  cardsData?: NFTData[];
  onPressCard?: () => void;
  onPressAddCart?: () => void;
}

export const NFTCardList = (props: NFTCardListComponentProps) => {
  const { onPressCard, onPressAddCart, cardsData } = props;
  const navigating = useNavigation();
  const { addCartData, removeCartData } = useContext(CartContext);

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