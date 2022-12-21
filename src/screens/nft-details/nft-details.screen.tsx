import React, { useState,  } from "react";
import { Dimensions, Linking } from "react-native";
import { AddCartButtonText } from "../../components/atoms/atm.cart-button/add-cart-button-text.atm.styled";
import { AddCartButton } from "../../components/atoms/atm.cart-button/add-cart-button.atm.styled";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NFTImage } from "../../components/atoms/atm.nft/nft-image.atm";
import { NFTData } from "../../system/interfaces/common.interfaces";
import { DetailsButtonsContainer, DetailsScreenContent, NFTDetailsText } from "./nft-details.styled";


interface NFTDetailsProps {
  nft?: NFTData;
}

const NFTDetails = (props: NFTDetailsProps) => {
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.60);
  const { nft } = props.route.params;
  return (
    <Container addFlex>
      <DetailsScreenContent paddingValue={8}>
        <DetailsScreenContent paddingValue={12} hasBorder>
          <NFTDetailsText
            fontSize={24}
            isBold
          >
            {nft?.name}
          </NFTDetailsText>
        </DetailsScreenContent>
        <DetailsScreenContent>
          <NFTImage 
            source={nft?.image_url!}
            sourceWidth={(imageSourceWidth).toString()}
            sourceHeight={(imageSourceWidth).toString()}
          />
        </DetailsScreenContent>
        <DetailsScreenContent paddingValue={36}>
          <NFTDetailsText fontSize={18}>
            <NFTDetailsText isBold fontSize={18} noCenter>
              Collection:
            </NFTDetailsText>
            <NFTDetailsText isBold fontSize={18}>
              {" "}
            </NFTDetailsText>
            {` ${nft?.collection?.name}`}
            </NFTDetailsText>
          <NFTDetailsText noCenter>{nft?.description}</NFTDetailsText>
        </DetailsScreenContent>
        <DetailsButtonsContainer hasBorder hasPadding>
          <AddCartButton onPress={() => {}}>
            <AddCartButtonText>{"Add to cart"}</AddCartButtonText>
          </AddCartButton>
          <AddCartButton bgColor="#1E75CC" onPress={() => Linking.openURL(nft.permalink)}>
            <AddCartButtonText>{"Go to OpenSea"}</AddCartButtonText>
          </AddCartButton>
        </DetailsButtonsContainer>
      </DetailsScreenContent>
    </Container>
  )
}

export default NFTDetails;