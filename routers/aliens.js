const express = require("express");  // to import and use express framework  here.
const router = express.Router();   // create express router to can rout to the following http request methods
const Alien = require("../models/alien") // to import and use alin schema file here.

router.get('/', async(req,res) =>{   // handle http get methods
    try{
        const aliens =await Alien.find() // await is used to handle async requests when use data from database. 
        res.json(aliens);
    }catch(err){
        res.send("Error " + err);
    }
})

router.get('/:id', async(req,res) =>{   // handle  get alien by id
    try{
        const alien =await Alien.findById(req.params.id) // await is used to handle async requests when use data from database. 
        res.json(alien);
    }catch(err){
        res.send("Error " + err);
    }
})

router.post('/', async(req,res) =>{ // handle  post  to insert alien
    const alien = new Alien({  // create alien object
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    });
    try{       
        const a1 = await alien.save(); // save alien object to target schema
        res.json(a1); // return saved object as josn object.
    }catch(err){
        res.send("Error " + err);
    }
})

router.patch('/:id', async(req,res) =>{   // handle  update requested alien by id
    try{
        const alien =await Alien.findById(req.params.id) // await is used to handle async requests when use data from database. 
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send("Error " + err);
    }
})

router.delete('/:id', async(req,res) =>{   // handle  delete requested alien by id
    try{
        const alien =await Alien.findById(req.params.id) // await is used to handle async requests when use data from database. 
        const a1 = await alien.remove();
        res.send("alien deleted successfully ");

    }catch(err){
        res.send("Error " + err);
    }
})

module.exports = router; // export router file to can be used in other files in the app for handle routing methods.