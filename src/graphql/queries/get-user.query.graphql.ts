import { gql } from "@apollo/client";

export const getWalletData = () => gql`
query GetWalletData {
  getUser {
    countAssets
    wallet {
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