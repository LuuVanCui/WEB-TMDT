const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    user_id: {
        type: String, 
        require: true,
    },
    total: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
    }
})

module.exports = mongoose.model('bill', BillSchema);