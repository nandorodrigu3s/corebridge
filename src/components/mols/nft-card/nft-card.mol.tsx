import React, { useContext } from "react";
import { NFTCardContainer, NFTCardContent } from "../../atoms/atm.containers/nft-card-container.atm.styled";
import { AddCartContainer } from "../../atoms/atm.containers/add-cart-container.atm.styled";
import { NFTImage } from "../../atoms/atm.nft/nft-image.atm";
import { NFTCardText } from "../../atoms/atm.nft-card/card-text.atm.styled";
import { NFTData } from "../../../system/interfaces/common.interfaces";
import { Alert, TouchableOpacity } from "react-native";
import { CartContext } from "../../../contexts";
import { CartButton } from "../../atoms/atm.cart-button/cart-button.atm.styled";
import { CartButtonText } from "../../atoms/atm.cart-button/button-text.atm.styled";
import { useMutation, gql } from '@apollo/client';
import { UpdateCartInput, UpdateCartType } from "../../../graphql/types";

interface NFTCardProps {
  onPress?: () => void;
  onPressAddCart?: () => void;
  onPressRemoveCart?: () => void;
  nft: NFTData;
  hidePrice?: boolean;
  hideDescription?: boolean;
  hideAddButton?: boolean;
  disabled?: boolean;
  showRemoveButton?: boolean;
  circle?: boolean;
}

export const NFTCard = (props: NFTCardProps) => {
  const UPDATE_CART = gql`
    mutation UpdateCart($updateCartInput: UpdateCartInput!) {
      updateCart(updateCartInput: $updateCartInput) {
        nfts { image_url name description permalink }
      }
    }
  `;
  const [addTodo, { data, loading, error }] = useMutation(UPDATE_CART);

  const { 
    nft,
    onPress,
    disabled,
    hidePrice,
    hideAddButton,
    onPressAddCart,
    onPressRemoveCart,
    showRemoveButton,
    hideDescription,
    circle
  } = props;
  
  const { addCartData, removeCartData } = useContext(CartContext);

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <NFTCardContainer hasBorder>
        <NFTCardContent paddingValue={8} hasBorder>
          <NFTImage circle={circle} source={nft.image_url} />
        </NFTCardContent>
        <NFTCardContent noPadding>
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
          {!hidePrice && <NFTCardText isBold>{nft.price.label}</NFTCardText>}
          { !hideAddButton &&
            <AddCartContainer hasPadding>
                <CartButton
                  onPress={async () => {
                    onPressAddCart && onPressAddCart();
                    addCartData(nft);
                    addTodo({ variables: { nft, type: UpdateCartType.Add } });
                  }}
                >
                  <CartButtonText>{"Add to cart"}</CartButtonText>
                </CartButton>
            </AddCartContainer>
          }
          { showRemoveButton &&
            <AddCartContainer hasPadding>
                <CartButton
                  bgColor={"#E13000"}
                  onPress={() => {
                    onPressRemoveCart && onPressRemoveCart();
                    removeCartData(nft);
                  }}
                >
                  <CartButtonText>{"Remove"}</CartButtonText>
                </CartButton>
            </AddCartContainer>
          }
        </NFTCardContent>
      </NFTCardContainer>
    </TouchableOpacity>
  )
}