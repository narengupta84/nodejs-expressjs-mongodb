require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { verifyAccessToken } = require('./src/middleware/jwt.middleware')

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

//Public APIs. No authentication needed
const Router = require('./src/routers/v1/index.v1.routes')
app.use('/v1', Router)

//Middleware to get token
const authMiddlewareRouter = require('./src/middleware/auth.middleware')
app.use('/jwt', authMiddlewareRouter)

//Auth APIs. Authentication needed
const authRouter = require('./src/routers/auth/index.auth.routes')
app.use('/auth', verifyAccessToken, authRouter)

app.use('/', (req, res) => {
    res.send({
        message: 'rent-a-car api working...'
    });
});

app.listen(process.env.PORT, () => console.log(`Node API app is running on port ${process.env.PORT}`))