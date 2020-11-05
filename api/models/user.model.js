const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String, 
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    image: String,
})

module.exports = mongoose.model('user', UserSchema);
