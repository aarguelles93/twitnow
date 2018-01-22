const express = require("express");
const app =  express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(config.db.url);

const api = require('./api/v1');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

app.use("/api", api);

//
app.use((req,res,next)=>{
    res.status(404);
    res.json({
       message:"Not found" 
    });
});

app.use((err,req,res,next)=>{
    res.status(500);
    res.json({
        message:err.message
    });
});


module.exports = app;