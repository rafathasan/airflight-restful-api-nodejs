const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    personal_id : String,
    address_detail : String
})

module.exports = mongoose.model('Customer', schema)