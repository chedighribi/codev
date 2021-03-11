const mongoose = require ('mongoose')

const schema = mongoose.Schema

const newsletterSchema = new schema ({
    fullName : {
        type : String,
        required :true,
    },
    email : {
        type : String,
        required :true,
        unique : true,
    }
})

module.exports = newsletter = mongoose.model ('newsletter',newsletterSchema)