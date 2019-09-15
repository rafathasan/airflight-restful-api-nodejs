const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id  : mongoose.Schema.Types.ObjectId,
    travel_agency_details  : String
})

module.exports = mongoose.model('Travel_Agency', schema)