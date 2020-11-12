const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const ProductSchema = new Schema({
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    category_id: {
        type: String,
        required: true
    },
    product_img: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_description: String,
    brand_id: {
        type: String,
        required: true
    },
    product_quantity:{ 
        type: Number,
        required: true
    },
    product_weight :{
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);


module.exports = mongoose.model('product', ProductSchema);