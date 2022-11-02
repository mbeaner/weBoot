const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Product {
    _id: ID
    title: String
    description: String
    category: String
    price: Int
    compareAtPrice: Int
    vendor: String
    tags: [String]
    reviews: [String]
    upc: Int
    variants: [String]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    products(name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
