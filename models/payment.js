const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    booking_id : mongoose.Schema.Types.ObjectId,
    payment_amount : {type: Number, min: 1, required: true, },
    payment_date : {type: Date, required: true},
    other_details : {type: String, required: true}
})

module.exports = mongoose.model('Payment', schema)