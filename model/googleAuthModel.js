const mongoose = require('mongoose')

const googleAuth = new mongoose.Schema({
    googleId: {
        type: String,
        required: true

    }
}, { timestamps: true })

module.exports = mongoose.model('users', googleAuth)