import React, { useContext, useState,  } from "react";
import { Dimensions, Linking } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { CartButtonText } from "../../components/atoms/atm.cart-button/button-text.atm.styled";
import { CartButton } from "../../components/atoms/atm.cart-button/cart-button.atm.styled";
import { Container } from "../../components/atoms/atm.containers/container.atm.styled";
import { NFTImage } from "../../components/atoms/atm.nft/nft-image.atm";
import { CartContext } from "../../contexts";
import { NFTData } from "../../system/interfaces/common.interfaces";
import { DetailsButtonsContainer, DetailsScreenContent, NFTDetailsText } from "./nft-details.styled";


interface NFTDetailsProps {
  nft?: NFTData;
}

const NFTDetails = (props: NFTDetailsProps) => {
  const { width } = Dimensions.get("screen");
  const imageSourceWidth = (width * 0.60);
  const { nft } = props.route.params || {};
  const { addCartData } = useContext(CartContext);

  const showMessage = () => {
    const message = "NFT adicionado ao carrinho com sucesso!";
    Toast.show({
      type: 'success',
      text1: 'Oops',
      text2:  `${message}`
    });
  }

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
          <CartButton onPress={() => {
            addCartData(nft, showMessage);
          }}>
            <CartButtonText>{"Add to cart"}</CartButtonText>
          </CartButton>
          <CartButton bgColor="#1E75CC" onPress={() => Linking.openURL(nft.permalink)}>
            <CartButtonText>{"Go to OpenSea"}</CartButtonText>
          </CartButton>
        </DetailsButtonsContainer>
      </DetailsScreenContent>
    </Container>
  )
}

export default NFTDetails;