const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//trạng thái đơn hàng 
const billStateSchema = new Schema({
    state: {
        type: Boolean,
        required: true
    }
});
//chi tiết đơn hàng
const billDetailSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
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
    billDetail:[billDetailSchema], 
    state: [billStateSchema]

})

module.exports = mongoose.model('bill', billSchema);