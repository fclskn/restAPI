const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        requierd: true,
        trim: true
    },
    description:{
        type: String,
        requierd: true,
        trim: true
    },
    stock:{
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("post", postSchema)