const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();
const aboutUs1 = require("../Models/aboutUsSchema1");

// @route : http://localhost:5001/api/aboutUs1
// Get about us part 1
// public

router.get("/", async (req, res) => {
  try {
    const firstAboutUs = await aboutUs1.find();
    res.json({ msg: "about us 1 fetched", firstAboutUs });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5001/api/aboutUs1
// POST about us part 1
// private

router.post("/", async (req, res) => {
  const { redTitle, mainTitle, content } = req.body;
  try {
    const newAboutUs1 = new aboutUs1({ redTitle, mainTitle, content });
    const firstAboutUs = await newAboutUs1.save();
    res.json({ msg: "about us 1 added", firstAboutUs });
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5001/api/aboutUs1/_id
// PUT about us part 2
// private

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const editedFirstAboutUs = await aboutUs1.findOneAndUpdate(
      { _id },
      { $set: req.body },
      { new: true }
    );
    res.json({ msg: "about us 1 edited", editedFirstAboutUs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
