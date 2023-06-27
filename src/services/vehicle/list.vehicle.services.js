const Vehicles = require('../../models/vehicle')

async function vehicleList(req, res) {
    try {
        const vehicles = await Vehicles.find()
        return vehicles
      } 
    catch (err) {
        return ({ message: err.message })
      }
  }

  module.exports = {
    vehicleList: vehicleList
  };