import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query {
    user {
      _id
      firstName
      lastName
      email
      image
      orders {
        _id
        purchaseDate
        products {
          _id
          title
          price
        }
      }
    }
  }
`;
