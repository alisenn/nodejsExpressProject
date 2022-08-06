const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();

//Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware')
// })

//Import Routes
const restRoute = require('./routes/restRoutes');

app.use('/posts', restRoute)

app.get('/', (req,res) => {
    res.send('We are on home')
})

//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION, {userNewUrlParser: true}, () =>
        console.log('connected to db')
)

//Listen from server
app.listen(3000)