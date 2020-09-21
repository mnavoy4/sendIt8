const express = require('express');
const mongojs = require('mongojs');
// const User = require('../models/userModel')
const Ride = require('../models/rideModel');

const db = mongojs("mongodb+srv://mnavoy4:Mpnobivu%212@cluster0.032i8.mongodb.net/senditdb", ["rides"]);

const router = express.Router();

router.get('/', (req, res, next) => {
  db.rides.find(function(error, rides){
    if (error){
      res.send(error);
    }
    res.json(rides);
  })
});

// router.get('/', (req, res, next) => {
//   const allRides = Ride.find({});
//   console.log(allRides)
//   if (allRides) {
//     res.send(allRides);
//   } else {
//     res.status(401).send({ message: 'no rides' })
//   }
// })

router.post('/', (req, res, next) => {
  const ride = req.body.data;
  if (!ride.username){
    res.status(400);
    res.json({
      error: "Bad data"
    })
  } else {
    db.rides.save(ride, function(error, savedRide){
      if (error){
        res.send(error);
      }
      res.json(savedRide);
    });
  }
})

module.exports = router