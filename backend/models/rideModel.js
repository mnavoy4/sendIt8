const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  driver: { type: String, required: true },
  passengers: { type: Array, default: [] },
  seatsAvailable: { type: Number, required: true },
  pickUpLocation: { type: String, required: true },
  dropOffLocation: { type: String, required: true },
  vehicle: {
    make: { type: String },
    model: { type: String },
    seats: { type: String }
  }
});
const rideModel = mongoose.model("Ride", rideSchema)

module.exports = rideModel;