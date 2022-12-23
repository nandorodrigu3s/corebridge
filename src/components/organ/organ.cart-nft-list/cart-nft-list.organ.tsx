import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { CartContext } from "../../../contexts";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NFTCard } from "../../mols/nft-card/nft-card.mol";

interface CartNFTListComponentProps {
  cardsData?: NFTData[];
}

export const CartNFTList = (props: CartNFTListComponentProps) => {
  const { removeCartData } = useContext(CartContext);
  const navigating = useNavigation();
  const { cardsData } = props;
  const onPressCard = (item: NFTData) => {
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
      <>
        <NFTCard
          nft={item}
          onPressRemoveCart={() => removeCartData(item)}
          onPress={() => onPressCard(item)}
          hideDescription
          hideAddButton
          showRemoveButton
        />
      </>
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