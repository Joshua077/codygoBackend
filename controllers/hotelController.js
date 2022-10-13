const { ifError } = require("assert");
const { resolveAny } = require("dns");
const { Hotel } = require("../Modal/hotel");

const getAllHotel = async (req, res) => {
    const {city,name,country} = req.query
    const querryString = {}
  try {
    if(city){
        querryString.city = city
            console.log(querryString)
    }
    if(name){
        querryString.name = name
    }
    if(country){
        querryString.country = country
    }
   
    const hotel = await Hotel.find(querryString);
  
    if(hotel.length  <  1){
        return res.json({
            success: false,
            message: "hotel not found",
          })
    }
    return res.json({
    
      success: true,
      message: hotel   
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err,
    });
  }
};
const createHotel = async (req, res) => {
  const { name, city, country, address } = req.body;

  try {
    if (!name | !city | !country || !address) {
      return res.status(400).json({
        success: true,
        message: "Invalid input",
      });
    }

    const data = await Hotel.create({
      name,
      city,
      country,
      address,
    });
    return res.status(200).json({
      success: true,
      message: data,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleHotel = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        success: true,
        message: "Invalid input",
      });
    }

    const data = await Hotel.findOne({
      _id: id,
    });

    if(!data){
        return res.status(400).json({
            success: true,
            message: "No task find",
          });
    }

    return res.status(200).json({
      success: true,
      message: data,
    });
  } catch (err) {
    res.send(err);
  }
};
const updateHotel = async (req, res) => {
    const { id } = req.params;
try {
      if (!id) {
        return res.status(400).json({
          success: true,
          message: "Invalid input",
        });
      }
  
      const data = await Hotel.findOneAndUpdate({
        _id: id
      },req.body,{new: true, runValidators: true});
  
      if(!data){
          return res.status(400).json({
              success: true,
              message: "No task find",
            });
      }
  
      return res.status(200).json({
        success: true,
        message: "Updated succssfully",
      });
    } catch (err) {
      res.send(err);
    }
};
const deleteHotel = async (req, res) => {
    const { id } = req.params;

    try {
      if (!id) {
        return res.status(400).json({
          success: true,
          message: "Invalid input",
        });
      }
  
      const data = await Hotel.findOneAndDelete({
        _id: id,
      });
  
      if(!data){
          return res.status(400).json({
              success: true,
              message: "No task find",
            });
      }
  
      return res.status(200).json({
        success: true,
        message: "Deleted succssfully",
      });
    } catch (err) {
      res.send(err);
    }
};

module.exports = {
  getAllHotel,
  createHotel,
  deleteHotel,
  updateHotel,
  getSingleHotel,
};
