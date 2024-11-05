const { Query } = require('mongoose');
const userService = require('../services/userService');

const resolvers = {
    Query: {
        users: () => {
            return userService.getAllUsers();
        }
    },
    Mutation: {
        createUser: (_, {name, email, password, address, phone, userType, createdAt, preferredPaymentMethod}) => {
            return userService.createUser(name, email, password, address, phone, userType, createdAt, preferredPaymentMethod);
        },
        updateUser: (_, {_id, name, email, password, address, phone, userType, createdAt, preferredPaymentMethod}) => {
            return userService.updateUser(_id, name, email, password, address, phone, userType, createdAt, preferredPaymentMethod);
        },
        deleteUser: (_, { _id }) => {
            return userService.deleteUser(_id);
        }
    }
}

module.exports = resolvers;