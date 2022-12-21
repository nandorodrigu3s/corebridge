import React from "react";
import { NFTCardContainer, NFTCardContent } from "../../atoms/atm.containers/nft-card-container.atm.styled";
import { AddCartContainer } from "../../atoms/atm.containers/add-cart-container.atm.styled";
import { AddCartButton } from "../../atoms/atm.cart-button/add-cart-button.atm.styled";
import { AddCartButtonText } from "../../atoms/atm.cart-button/add-cart-button-text.atm.styled";
import { NFTImage } from "../../atoms/atm.nft/nft-image.atm";
import ImageSources from "../../../assets/images";
import { NFTCardText } from "../../atoms/atm.nft-card/card-text.atm.styled";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { NavigateButton } from "../../atoms/atm.navigation-button/navigate-button.atm.styled";
import { TouchableOpacity } from "react-native";

interface NFTCardProps {
  onPress?: () => void;
  onPressAddCart?: () => void;
  nft: NFTData;
  hidePrice?: boolean;
  hideDescription?: boolean;
  hideButton?: boolean;
  disabled?: boolean;
}

export const NFTCard = (props: NFTCardProps) => {
  const { 
    nft,
    onPress,
    disabled,
    hidePrice,
    hideButton,
    onPressAddCart,
    hideDescription,
  } = props;

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <NFTCardContainer hasBorder noPadding>
        <NFTCardContent paddingValue={8} hasBorder>
          <NFTImage source={nft.image_url}/>
        </NFTCardContent>
        <NFTCardContent>
          <NFTCardContent paddingValue={12} hasBorder>
            <NFTCardText
              fontSize={24}
              isBold
            >
              {nft.name}
            </NFTCardText>
          </NFTCardContent>
          <NFTCardText>{nft?.collection?.name}</NFTCardText>
          {!hideDescription && <NFTCardText>{nft.description}</NFTCardText>}
          {!hidePrice && <NFTCardText>{nft.num_sales}</NFTCardText>}
          { !hideButton &&
            <AddCartContainer hasPadding>
                <AddCartButton onPress={onPressAddCart}>
                  <AddCartButtonText>{"Add to cart"}</AddCartButtonText>
                </AddCartButton>
            </AddCartContainer>
          }
        </NFTCardContent>
      </NFTCardContainer>
    </TouchableOpacity>
  )
}