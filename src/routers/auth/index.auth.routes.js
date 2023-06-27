const express = require('express')
const router = express.Router()
const vehicle = require('./venicle/vehicle.auth.routes')

router.get('/', async (req, res) => {
  try {
    res.json('Welcome to auth APIs')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.use('/vehicle', vehicle);

router.all('*', async (req, res) => {
  res.status(500).json({ message: 'Invalid Auth Route' })
});

module.exports = router