const express = require('express')
const mongoose = require('mongoose')

const dbname = process.env.DB
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${pw}@cluster0.hbusxj2.mongodb.net/${dbname}`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Established link to database.'))
.catch((err) => console.log(err))