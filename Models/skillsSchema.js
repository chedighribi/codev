const mongoose = require ('mongoose')

const schema = mongoose.Schema

const skillSchema = new schema ({
    link : {
        type : String,
        required :true,
    }
})

module.exports = skills = mongoose.model ('skills',skillSchema)