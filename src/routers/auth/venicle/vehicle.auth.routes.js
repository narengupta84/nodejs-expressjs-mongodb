const express = require('express')
const router = express.Router()
const Vehicle = require('../../../models/vehicle')
const vehicleList = require('../../../services/vehicle/list.vehicle.services')

// Getting all
router.get('/', async (req, res) => {
  let data = await vehicleList.vehicleList()
  res.json(data)
})

// Getting One
router.get('/:id', getVehicle, (req, res) => {
  res.json(res.vehicle)
})

// Creating one
router.post('/', async (req, res) => {
  const vehicle = new Vehicle({
    name: req.body.name,
    carType: req.body.carType,
    seater: req.body.seater,
    luggageAllowance: req.body.luggageAllowance,
    baseFare: req.body.baseFare,
    baseKm: req.body.baseKm,
    ratePerKm: req.body.ratePerKm,
    modelNo: req.body.modelNo,
    description: req.body.description,
    category: req.body.category,
    tags: req.body.tags,
    status: req.body.status,
  })
  try {
    const newVehicle = await vehicle.save()
    res.status(201).json(newVehicle)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// update full
router.put('/:id', getVehicle, async (req, res) => {
  res.vehicle.name= req.body.name
  res.vehicle.carType= req.body.carType
  res.vehicle.seater= req.body.seater
  res.vehicle.luggageAllowance= req.body.luggageAllowance
  res.vehicle.baseFare= req.body.baseFare
  res.vehicle.baseKm= req.body.baseKm
  res.vehicle.ratePerKm= req.body.ratePerKm
  res.vehicle.modelNo= req.body.modelNo
  res.vehicle.description= req.body.description
  res.vehicle.category= req.body.category
  res.vehicle.tags= req.body.tags
  res.vehicle.status= req.body.status

  try {
    const updateVehicle = await res.vehicle.save()
    res.status(201).json(updateVehicle)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getVehicle, async (req, res) => {
  if (req.body.name != null) {
    res.vehicle.name = req.body.name
  }
  if (req.body.carType != null) {
    res.vehicle.carType = req.body.carType
  }
  try {
    const updatedSubscriber = await res.vehicle.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getVehicle, async (req, res) => {
  try {
    //await res.vehicle.remove()
    await res.vehicle.findByIdAndDelete(res.vehicle._id);
    res.json({ message: 'Deleted Vehicle' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getVehicle(req, res, next) {
  let vehicle
  try {
    vehicle = await Vehicle.findById(req.params.id)
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