const express = require('express')
const router = express.Router()
const vehicle = require('./vehicle/vehicle.v1.routes')

router.get('/', (req, res) => {
    res.send({
        message: 'V1 Route'
    });
});

router.use('/vehicle', vehicle);

router.all('*', async (req, res) => {
    res.status(500).json({ message: 'Invalid Route' })
});

module.exports = router