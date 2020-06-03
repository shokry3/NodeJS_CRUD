const mongoose = require("mongoose"); // this to imort mongoose db module to use in this file.

const alienSchema = new mongoose.Schema({   //create alienSchema Schema with this structure 
    name : {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Alien', alienSchema); // required line to export the schema as object with name 'Alie' to can use in other files.