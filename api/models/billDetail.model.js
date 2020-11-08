const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BilldetailSchema = new Schema({
    bill_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);

var BillDetail = mongoose.model('billDetail', BilldetailSchema);
module.exports = BillDetail;