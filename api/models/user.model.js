const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    address: {
        type: String,
        require: true,
    },
    isAdmin: {type: Boolean,require: true, default: false}
})

module.exports = mongoose.model('user', UserSchema);
