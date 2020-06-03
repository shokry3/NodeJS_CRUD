const express = require("express");   // this to imort express module to use in this file.
const mongoose = require("mongoose");    // this to imort mongoose db module to use in this file.


const app = express();  // decalere app const var to Creates an Express application.


const url = 'mongodb://localhost/AlienDBx'; // mongodb connection string  url

mongoose.connect(url, {useNewUrlParser: true}); // start connect usin g parse the url
const con = mongoose.connection; // open the connection

con.on('open', () =>{               //emit an event if the connection open successful.
    console.log("connected...");
});

app.use(express.json())       // tell my application that I use Json format "required to can read json in the client".
const alienRouter =require('./routers/aliens'); // this to imort aliens file to can call http rout methodes here.
app.use('/aliens', alienRouter);    // rout any request  aliens to alienRouter the handle the http requests.

app.listen(9000, () =>{             //start localhost server on listen to port 9000
    console.log("Server Started");
}); 

