const express = require("express");
const app =  express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const config = require('./config');

mongoose.connect(config.db.url);

const api = require('./api/v1');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

var corsOptions ={
    origin: function (origin, callback){
        // Validate if received origin is part of whitelist
        if (config.cors.origin.indexOf(origin) !== -1){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials : Boolean(config.cors.credentials)
}

app.use(cors(corsOptions));

/*
app.use(cors({
    origin: String(config.cors.origin),
    credentials: Boolean(config.cors.credentials)
}));
*/

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