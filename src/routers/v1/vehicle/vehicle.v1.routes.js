const express = require('express')
const router = express.Router()
const Vehicles = require('../../../models/vehicle')
const activeVehicleList = require('../../../services/vehicle/active.list.vehicle.services')
// Getting all
router.get('/', async (req, res) => {
  let data = await activeVehicleList.activeVehicleList()
  res.json(data)
})

// Getting One
router.get('/:id', getVehicle, (req, res) => {
  res.json(res.vehicle)
})

async function getVehicle(req, res, next) {
  let vehicle
  try {
    vehicle = await Vehicles.findById(req.params.id)
    if (vehicle == null) {
      return res.status(404).json({ message: 'Cannot find vehicle' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.vehicle = vehicle
  next()
}

module.exports = router