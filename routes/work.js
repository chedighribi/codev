const express = require ('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const work = require ('../Models/workSchema');


// @route : http://localhost:5001/api/work
// post work
// private

router.post ('/', async (req,res)=>{
    const {link} = req.body
    try {
        const newWork = new work ({
            link,
        })
        const works = await newWork.save();
        res.json({msg:'work added',works})
    } catch (error) {
        console.log(error.message)
    }
})

// @route : http://localhost:5001/api/work
// get work
// public

router.get ('/', async (req,res)=>{
    try {
        const mywork = await work.find()
        res.json({msg:'works fetched',mywork});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

// @route : http://localhost:5000/api/work/:_id
// delete work
// private 

router.delete("/:_id", async (req, res) => {
    const  {_id}  = req.params;
    try {
      const workdeleted = await work.findOneAndDelete({ _id });
      res.json({ msg: "work deleted", workdeleted });
    } catch (error) {
      console.log(error);
    }
  });
  