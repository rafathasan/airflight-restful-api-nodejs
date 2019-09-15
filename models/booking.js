const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_id: String,
    outcome_code: String,
    status_code: String,
    travel_agency_id: String,
    date_of_booking: Date,
    booking_details: String
})

module.exports = mongoose.model('Booking', schema)