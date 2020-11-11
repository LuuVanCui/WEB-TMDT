const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const CategorySchema = new Schema({
    category_id: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

var category = mongoose.model("category", CategorySchema);
module.exports = category;