const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');
const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

// Combina los typeDefs y resolvers en arrays y objetos
const typeDefs = [productTypeDefs, userTypeDefs];
const resolvers = [productResolvers, userResolvers];

const startServer = async () => {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://daaicoronafl:commerce123@commerce.t4p4r.mongodb.net/?retryWrites=true&w=majority&appName=commerce');
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();