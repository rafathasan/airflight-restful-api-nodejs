const routes = require('express').Router()
const mongoose = require('mongoose')

const Customer = require('../../models/customer')

routes.get('/customer', (req, res, next) => {
    Customer.find()
    .exec()
    .then( (data) => {
        const datas = {
            count: data.length,
            array: data.map(dat => {
                return {
                    metadata: {url: 'http://localhost:3000/api/customer/'+dat._id },
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

routes.get('/customer/:_id', (req, res, next) => {
    Customer.findById(req.params._id)
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


routes.post('/customer', (req, res, next) => {
    const obj = new Customer({
        _id : mongoose.Schema.ObjectId(),
        personal_id : req.body.personal_id,
        address_detail : req.body.address_detail
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

routes.patch('/customer', (req, res, next) => {
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

routes.delete('/customer/:_id', (req, res, next) => {
    Customer.remove({_id:req.params._id})
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