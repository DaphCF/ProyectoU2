const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {type: String, require: true},
    name: {type: String, require: true},
    description: String,
    price: {type: Number, require: true},
    category: {type: String, enum: ['ELECTRONICS', 'CLOTHING', 'FOOD', 'TOYS'], require: true},
    brand: {type: String, require: true},
    quantity: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    images: {type: Array}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;