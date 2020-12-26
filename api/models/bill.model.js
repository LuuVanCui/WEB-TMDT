const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//chi tiết đơn hàng
const billDetailSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
//đơn hàng
const billSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    total: {
        type: Number,
    },
    address: {
        type: String,
        require: true,
    },
    billDetail: [billDetailSchema],
    idPaid: {
        type: Boolean,
        require: true,
        default: false
    },
    paidAt: { type: Date },
    deliveryStatus: {
        type: String
    },
    deliveredAt: { type: Date },
    shipper: { type: mongoose.Schema.Types.ObjectID, ref: 'user' },

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('bill', billSchema);