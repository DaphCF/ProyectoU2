const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String, require: true},
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    address: {type: String, require: true},
    phone: {type: String, require: true},
    userType: {type: String, require: true},
    createdAt: {type: Date, default: Date.now},
    preferredPaymentMethod: {type: Array}
});

const User = mongoose.model('User', userSchema);

module.exports = User;