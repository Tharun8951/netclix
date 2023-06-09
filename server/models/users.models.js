const mongoose = require('mongoose')
const { Schema } = mongoose

const userschema = new Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model('User', userschema)