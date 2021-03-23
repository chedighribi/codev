const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const aboutUs2 = require("../Models/aboutUsSchema2");

// @route : http://localhost:5001/api/aboutUs2
// Get about us part 2
// public

router.get("/", async (req, res) => {
  try {
    const secondAboutUs = await aboutUs2.find();
    res.json({ msg: "about us 2 fetched", secondAboutUs });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5001/api/aboutUs2
// POST about us part 2
// private

router.post("/", async (req, res) => {
  const { title, content, imageURL } = req.body;
  try {
    const newAboutUs2 = new aboutUs2({ title, content, imageURL });
    const secondAboutUs = await newAboutUs2.save();
    res.json({ msg: "about us 2 added", secondAboutUs });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5001/api/aboutUs2/_id
// PUT about us part 1
// private

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const editedSecondAboutUs = await aboutUs2.findOneAndUpdate(
      { _id },
      { $set: req.body },
      { new: true }
    );
    res.json({ msg: "about us 2 edited", editedSecondAboutUs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
