import { gql } from '@apollo/client';

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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      title
      images
      description
      category
      price
      quantity
      compareAtPrice
      vendor
      tags
      reviews
      upc
      variants
    }
  }
`;
