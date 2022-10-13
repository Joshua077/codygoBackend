const mongoose = require("mongoose")

const HotelSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
city:{
    type:String,
    required:[true ,"rrrrrrrr"],
  
},
country:{
    type:String,
    required:true,
  
},
address:{
    type:String,
    required:true,
  
},

}, {timestamps:true})


const Hotel = mongoose.model("Hotel" , HotelSchema)

module.exports={
    Hotel
}
