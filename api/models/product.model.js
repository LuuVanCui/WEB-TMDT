const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

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
        type: String,
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


module.exports = mongoose.model('product', ProductSchema);