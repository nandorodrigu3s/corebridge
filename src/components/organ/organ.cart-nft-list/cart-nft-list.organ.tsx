import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { CartContext } from "../../../contexts";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NFTCard } from "../../mols/nft-card/nft-card.mol";

interface CartNFTListComponentProps {
  cardsData?: NFTData[];
}

export const CartNFTList = (props: CartNFTListComponentProps) => {
  const { cardsData } = props;
  const { removeCartData } = useContext(CartContext);

  const renderCards = (({ item }) => {
    return (
      <>
        <NFTCard
          nft={item}
          disabled={true}
          onPressRemoveCart={() => removeCartData(item)}
          hideDescription
          hideAddButton
          hidePrice
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