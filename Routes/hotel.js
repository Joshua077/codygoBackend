const express = require('express');
const { getAllHotel,createHotel,getSingleHotel,updateHotel,deleteHotel } = require('../controllers/hotelController');

const hotelRouter = express.Router();

hotelRouter.get("/",getAllHotel)
hotelRouter.post("/",createHotel)
hotelRouter.get("/:id",getSingleHotel)
hotelRouter.patch("/:id",updateHotel)
hotelRouter.delete("/:id",deleteHotel)




module.exports = hotelRouter