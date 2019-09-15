const fs = require('fs')
const express = require('express')
const app = express()
const body_parser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes/createRouter.js')()

mongoose.connect(`mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PASS}@cluster0-anlhf.mongodb.net/test?retryWrites=true&w=majority`,
{useNewUrlParser: true,
useUnifiedTopology: true})

app.use(morgan("dev"))
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())

app.use('/api', router)

module.exports = app