const User = require('../models/userModel');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },
    createUser: async (name, email, password, address, phone, userType, createdAt, preferredPaymentMethod) => {
        const user = new User({name, email, password, address, phone, userType, createdAt, preferredPaymentMethod});
        return await user.save();
    },
    updateUser: async (_id, name, email, password, address, phone, userType, createdAt, preferredPaymentMethod) => {
        return await User.findByIdAndUpdate(_id,{name, email, password, address, phone, userType, createdAt, preferredPaymentMethod});
    },
    deleteUser: async (_id) => {
        return await User.findByIdAndDelete(_id);
    }
}