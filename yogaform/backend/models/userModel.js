const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
    },
    batch: {
        type: Number,
        required: false,
        default: -1
    },
    paymentDone: {
        type: Boolean,
        required: false,
        default: false,
    },
    age: {
        type: Number,
        required: false
    }
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel