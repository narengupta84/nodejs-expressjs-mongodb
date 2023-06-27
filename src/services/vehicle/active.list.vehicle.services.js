const Vehicles = require('../../models/vehicle')

async function activeVehicleList(req, res) {
    try {
        const vehicles = await Vehicles.find({
            "status":"A"
        })
        return vehicles
      } 
    catch (err) {
        return ({ message: err.message })
      }
  }

  module.exports = {
    activeVehicleList: activeVehicleList
  };