const mongoose = require('mongoose');
const Schema = mongoose.Schema; // C2: const { Schema } = mongoose;

const LoginSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, 
{
    timestamps: true
});

var Login = mongoose.model('hieu', LoginSchema);
module.exports = Login;

