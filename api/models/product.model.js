const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//categor
const reviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        //   rating: { type: Number, default: 0 },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);
const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        categoryname: {
            type: String,
            required: true
        },
        image: {
            type: Array,
            // required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        brandname: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        review: [reviewSchema]
    },
    {
        timestamps: true
    }
);

// module.exports = mongoose.model('review', reviewSchema);
module.exports = mongoose.model('product', ProductSchema);