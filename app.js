const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();
const bodyParser = require('body-parser')

//Import Routes
const country = require('./routes/country');
const salesRep = require('./routes/salesrep');

//Middlewares
app.use('/countries', country)
app.use('/salesrep', salesRep)
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})

//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION, () =>
        console.log('connected to db')
)

//Listen from server
app.listen(3000)