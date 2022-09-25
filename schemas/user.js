const mongoose = require('mongoose')
const user_schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_nos: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('users',user_schema)