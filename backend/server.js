const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

//CORS middleware
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Cache-control', 'no-store'); 
    if (req.method === "OPTIONS") res.sendStatus(200);
    else next();
  });

//connect to MongoDB
const mongoCS = require('dotenv').config();
mongoose.connect(mongoCS, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "MongoDB connection error:"));
connection.once("open", function() { console.log("connected");  });
