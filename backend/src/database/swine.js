const mongoose = require('mongoose')

const {Schema} = mongoose;


const swineSchema = new Schema({
    name : {
        type : 'string',
        required : true
    },
    breed : {
        type : 'string',
        required : true
    },
    gender : {
        type : 'string',
        required : true
    },
    weight : {
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
}, {timestamps : true})

const Swine = mongoose.model('Swine', swineSchema)
module.exports = Swine