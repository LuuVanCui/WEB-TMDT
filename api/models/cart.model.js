const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartShema = new Schema({
    user_id: {
        type: String,
        require: true,
    },
    product_id: {
        type: String, 
        require: true, 
    },
    quantity: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('cart', CartShema);