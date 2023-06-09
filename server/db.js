const mongodb = require('mongodb');
const mongoose = require('mongoose');
const mongo_URI = process.env.mongo_URI

const mongoURI = process.env.mongo_URI

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true })
        .then(()=>console.log('database connected'))
    } catch (err) {
        console.log(err)
    }
}

module.exports = mongoDB