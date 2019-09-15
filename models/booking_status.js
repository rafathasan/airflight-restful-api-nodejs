const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    status_code: mongoose.Schema.Types.ObjectId,
    status_description   : String
})

module.exports = mongoose.model('Booking_Status', schema)