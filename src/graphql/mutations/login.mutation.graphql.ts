import { gql } from "@apollo/client";

export const loginMutation = (params: string[] = []) => gql`
  mutation Login($authInput: Auth!) {
    login(authInput: $authInput) {
      token
      user {
        firstName
        lastName
        countAssets
        wallet {
          ${params.join(' ')}
          image_url
          name
          description
          external_link
          permalink
          collection {
            name
            created_date
          }
          token_id
          price {
            label
            value
          }
        }
      }
    }
  }
`;