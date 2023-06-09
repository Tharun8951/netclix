const mongoose = require('mongoose')
const { Schema } = mongoose

const favMoviesSchema = new Schema({
    title: String,
    description: String,
    language: String,
    popularity: Number,
    img: String,
})

module.exports = mongoose.model('Favmovie', favMoviesSchema)