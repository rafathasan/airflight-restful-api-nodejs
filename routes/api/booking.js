const routes = require('express').Router()
const mongoose = require('mongoose')

const Booking = require('../../models/booking')

routes.get('/booking', (req, res, next) => {
    Booking.find()
    .exec()
    .then( (data) => {
        const datas = {
            count: data.length,
            array: data.map(dat => {
                return {
                    metadata: {url: 'http://localhost:3000/api/booking/'+dat._id },
                    body: dat
                }
            })
        }
        console.log(datas)
        res.status(200).json(datas)
    })
    .catch( err => {
        console.log(err)
        res.status(400).json(err)
    })
})

routes.get('/booking/:_id', (req, res, next) => {
    Booking.findById(req.params._id)
    .exec()
    .then( (data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch( err => {
        console.log(err)
        res.status(400).json(err)
    })
})


routes.post('/booking', (req, res, next) => {
    const obj = new Booking({
        _id: mongoose.Types.ObjectId(),
        customer_id: req.body.customer_id,
        outcome_code: req.body.outcome_code,
        status_code: req.body.status_code,
        travel_agency_id: req.body.travel_agency_id,
        date_of_booking: new Date(),
        booking_details: req.body.booking_details
    })
    obj.save()
    .then( (data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch( err => {
        console.log(err)
        res.status(400).json(err)
    })
})

routes.patch('/booking', (req, res, next) => {
    const updates = {}

    const keys = Object.keys(req.body)
     for(const key of keys){
        updates[key] = req.body[key]
    }
    console.log(updates)

    Booking.update({_id:req.body._id},{$set:updates})
    .exec()
    .then( (data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch( err => {
        console.log(err)
        res.status(400).json(err)
    })
})

routes.delete('/booking/:_id', (req, res, next) => {
    Booking.remove({_id:req.params._id})
    .exec()
    .then( (data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch( err => {
        console.log(err)
        res.status(400).json(err)
    })
})

module.exports = routes