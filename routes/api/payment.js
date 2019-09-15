const routes = require('express').Router()
const mongoose = require('mongoose')

const Payment = require('../../models/payment')

routes.get('/payment', (req, res, next) => {
    Payment.find()
    .exec()
    .then( (data) => {
        const datas = {
            count: data.length,
            array: data.map(dat => {
                return {
                    metadata: {url: 'http://localhost:3000/api/payment/'+dat._id },
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

routes.get('/payment/:_id', (req, res, next) => {
    Payment.findById(req.params._id)
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


routes.post('/payment', (req, res, next) => {
    const obj = new Payment({
        _id : mongoose.Types.ObjectId(),
        booking_id : req.body.booking_id,
        payment_amount : req.body.payment_amount,
        payment_date : new Date(),
        other_details : req.body.other_details
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

routes.patch('/payment', (req, res, next) => {
    const updates = {}

    const keys = Object.keys(req.body)
     for(const key of keys){
        updates[key] = req.body[key]
    }
    console.log(updates)

    Payment.update({_id:req.body._id},{$set:updates})
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

routes.delete('/payment/:_id', (req, res, next) => {
    Payment.remove({_id:req.params._id})
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