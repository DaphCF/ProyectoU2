const Product = require('../models/productModel');

module.exports = {
    getAllProducts: async () => {
        return await Product.find();
    },
    createProduct: async (name,description,price,category,brand,quantity,createdAt,images) => {
        const product = new Product({name,description,price,category,brand,quantity,createdAt,images});
        return await product.save();
    },
    updateProduct: async (_id, name,description,price,category,brand,quantity,createdAt,images) => {
        return await Product.findByIdAndUpdate(_id,{name,description,price,category,brand,quantity,createdAt,images});
    },
    deleteProduct: async (_id) => {
        return await Product.findByIdAndDelete(_id);
    }
}