const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        carType: {
            type: String,
            required: true
        },
        seater: {
            type: Number,
            required: true
        },
        luggageAllowance: {
            type: Number,
            required: true
        },
        baseFare: {
            type: Number,
            required: true
        },
        baseKm: {
            type: Number,
            required: true
        },
        ratePerKm: {
            type: Number,
            required: true
        },
        modelNo: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: false
        },
        tags: {
            type: String,
            required: false
        },
        status :{
            type: String,
            required: true
        },       
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Vehicle', vehicleSchema);