const { gql } = require('apollo-server');

const typeDefs = gql`
    enum Category {
        ELECTRONICS
        CLOTHING
        FOOD
        TOYS
    }

    type Product {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        category: Category!
        brand: String!
        quantity: Int
        createdAt: String
        images: [String]
    }
    type Query {
        products: [Product]!
    }
    type Mutation {
        createProduct(name: String!, description: String!, price: Float!, category: Category, brand: String!, quantity: Int, createdAt: String, images: [String]): Product!
        updateProduct(_id: ID!, name: String!, description: String!, price: Float!, category: Category, brand: String!, quantity: Int, createdAt: String, images: [String]): Product!
        deleteProduct(_id: ID!): Product!
    }
`;

module.exports = typeDefs;