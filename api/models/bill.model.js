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
    date: {
        type: Date,
        require: true,
    },
    billDetail: [billDetailSchema],
    state: {
        type: Boolean,
        require: true,
        default: false
    }

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('bill', billSchema);