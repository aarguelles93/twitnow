const express = require("express");
const app =  express();

const bodyParser = require('body-parser');


const api = require("./api");

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