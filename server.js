require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//BEGIN Increase bodyParser size so that API can handle big image file byte array
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//END Increase bodyParser size so that API can handle big image file byte array

//BEGIN Connect to Mongo DB
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log('Connected to Database 🚀🚀')
}).catch((error) => {
    console.error(error)
})
//END Connect to Mongo DB

app.use(express.json())

const vehicleRouter = require('./routers/vehicle')
app.use('/vehicle', vehicleRouter)

const authRouter = require('./middleware/auth.middleware')
app.use('/auth', authRouter)

app.use('/', (req, res) => {
    res.send({
        message: 'rent-a-car api working...'
    });
});

app.listen(process.env.PORT, () => console.log(`Node API app is running on port ${process.env.PORT}`))