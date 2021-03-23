const express = require ('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const cards = require ('../Models/cardsScema');


// @route : http://localhost:5001/api/cards
// post card
// privet

router.post ('/', async (req,res)=>{
    const {title, description,img} = req.body
    try {
        const Card = new cards ({
            title,
            description,
            img
        })
        const card = await Card.save();
        res.json({msg:'card added',card})
    } catch (error) {
        console.log(error.message)
    }
})

// @route : http://localhost:5001/api/cards
// get cards
// public

router.get ('/', async (req,res)=>{
    try {
        const card = await cards.find()
        res.json({msg:'cards fetched',card});
    } catch (error) {
        console.log(error)
    }
})

// @route : http://localhost:5001/api/cards
// edite cards
// private

router.put("/:_id",  async (req, res) => {
    const { _id } = req.params;
    try {
      const cardedited = await cards.findOneAndUpdate({ _id }, { $set: req.body });
      res.json({ msg: "card edited", cardedited });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;