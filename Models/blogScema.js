const mongoose = require ('mongoose')

const schema = mongoose.Schema

const blogscema = new schema ({
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

module.exports = blog = mongoose.model ('blogs',blogscema)