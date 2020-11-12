const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
    product_id:{
        type: String, 
        require: true
    },
    review_message: {
        type: String, 
        require: true
    }
});
