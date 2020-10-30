const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const ProductSchema = new Schema({
    product_id: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    product_img: {
        type: Array,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_description: String,
    product_supplier: {
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
    },

    product_review : String

},
{
    timestamps: true
}
);

var Product = mongoose.model('Product',ProductSchema);
module.exports = Product;