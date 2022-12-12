const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
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
        required: true,
    },
    paymentDone: {
        type: Boolean,
        required: false,
        default: false,
    },
    age: {
        type: Number,
        required: true
    }
})

const userModel = mongoose.model('User', userSchema)
export default userModel