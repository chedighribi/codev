const mongoose = require ('mongoose')

const schema = mongoose.Schema

const cardsScema = new schema ({
    title : {
        type : String,
        required :true,
    },
    description : {
        type : String,
        required :true,
    },
    img :{
        type : String
    }
})

module.exports = cards = mongoose.model ('cards',cardsScema)