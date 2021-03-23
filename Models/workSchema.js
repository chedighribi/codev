const mongoose = require ('mongoose')

const schema = mongoose.Schema

const workSchema = new schema ({
    link : {
        type : String,
        required :true,
    }
})

module.exports = work = mongoose.model ('work',workSchema)