import { gql } from "@apollo/client";

export const createOrderMutation = () => gql`
  mutation CreateOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput) {
      orderId
    }
  }
`;

