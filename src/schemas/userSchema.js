const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        address: String!
        phone: String!
        userType: String!
        createdAt: String
        preferredPaymentMethod: [String]
    }
    type Query {
        users: [User]!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!, address: String!, phone: String!, userType: String!, createdAt: String, preferredPaymentMethod: [String]): User!
        updateUser(_id: ID!, name: String!, email: String!, password: String!, address: String!, phone: String!, userType: String!, createdAt: String, preferredPaymentMethod:[String]): User!
        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;