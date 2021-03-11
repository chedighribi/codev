const express = require ('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const newsletter = require ('../Models/newsletterSchema');


// @route : http://localhost:5001/api/newsletter
// post subscriber
// public

router.post ('/', async (req,res)=>{
    const {fullName, email} = req.body
    try {
        const newUser = new newsletter ({
            fullName,
            email,
        })
        const user = await newUser.save();
        res.json({msg:'user subscribed',user})
    } catch (error) {
        console.log(error.message)
    }
})

// @route : http://localhost:5001/api/newsletter
// get subscriber
// private

router.get ('/', async (req,res)=>{
    try {
        const subscribers = await newsletter.find()
        res.json({msg:'subscribers fetched',subscribers});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;