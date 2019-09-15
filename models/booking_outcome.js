const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    outcome_code: mongoose.Schema.Types.ObjectId,
    outcome_description  : String
})

module.exports = mongoose.model('Booking_Outcome', schema)