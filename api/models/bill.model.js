const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    bill_id:{
        type: String, 
        require: true,
    }, 
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

module.exports = mongoose.model('Bill', BillSchema);