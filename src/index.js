const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes');
const{default:mongoose }= require('mongoose');
const app = express();
const bodyParser = require("body-parser");

const port = process.env.port ||3001;

// Middleware for parsing JSON requests ------------------

// Routes ---------------------------------
app.use(bodyParser.json());
routes(app);


// Connect to MongoDB --------------------------------
mongoose.connect(`${process.env.mongoDB}`)
.then(()=>{
    console.log("DATABASE CONNECTED! >>>>>>>>>>>>>")
})
.catch((err)=>{
    console.log(err);
})


// --------------------------------
app.listen(port,() => {
    console.log("Server is running on port " + port)
});