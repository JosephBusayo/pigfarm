const mongoose = require('mongoose')
const {Schema} = mongoose;


const feedSchema = new Schema({
    type : {
        type : 'string',
        required : true
    },
    name : {
        type : 'string',
        required : true
    },
    size : {
        type : Number,
        required : true
    }
}, {timestamps : true})

const Feed = mongoose.model('Feed', feedSchema)
module.exports = Feed