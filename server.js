const express = require('express');
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const hotelRouter = require('./Routes/hotel');
const app = express();
const cors = require("cors");



app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
   res.header({"Access-Control-Allow-Origin": "*"});
   next();
 })
 
app.get("/", (req, res) => {
      res.send("Learning again")
   })

app.use("/api/v1/hotel", hotelRouter)

  

 const PORT =  process.env.PORT


 const start = async () =>{
    try{
           const data = await  mongoose.connect(process.env.MONGO_URI)
           console.log("data coonected", "data")
           app.listen( PORT, console.log("Listen to port " + PORT))
    }
    catch(err){
        console.log(err,"err")
    }
 }

start()

