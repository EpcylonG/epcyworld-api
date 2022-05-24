const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            trim: true,
            required: true,
            maxlength: 30
        },
        username: {
            type: String,
            trim: true,
            required: false,
            maxlength: 30
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: 50
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema );