import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query {
    user {
      _id
      firstName
      lastName
      email
      image
      address {
        street
        city
        state
        zip
      }
      orders {
        _id
        purchaseDate
        id
        products {
          id
          _id
          title
          price
        }
      }
    }
  }
`;
