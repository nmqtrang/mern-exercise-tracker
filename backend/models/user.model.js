const mongoose = require('mongoose');
const Schema = mongoose.Schema; // or: import { Schema } from "mongoose";

const userSchema = new Schema({
    // the only data field:
    username: { 
        // validations to username
        type: String,
        required: true,
        unique: true,
        trim: true, // to trim whitespaces at the end of phrase
        minLength: 3
    },
}, {
    timestamps: true, // a field to automatically create the time value of creating or modifying data
});

const User = mongoose.model('User', userSchema); // 'User' can be anything, is the name we will use

module.exports = User;