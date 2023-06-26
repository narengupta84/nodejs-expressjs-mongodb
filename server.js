require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log('Connected to Database')
}).catch((error) => {
    console.error(error)
})

app.use(express.json())

const vehicleRouter = require('./routers/vehicle')
app.use('/vehicle', vehicleRouter)

app.listen(process.env.PORT, () => console.log(`Node API app is running on port ${process.env.PORT}`))