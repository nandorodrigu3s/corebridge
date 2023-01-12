import { gql } from "@apollo/client";

export const updateCartMutation = (params?: string[]) => gql`
mutation UpdateCart ($updateCart: UpdateCartInput!) {
  updateCart(updateCartInput: $updateCart) {
    nfts {
      id
      num_sales
      category
      image_url
      name
      description
      external_link
      permalink
      collection {
        created_date
        name
      }
      token_id
      price {
        label
        value
      }
    }
  }
}`;