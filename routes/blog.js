const express = require ('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const blog = require ('../Models/blogScema');


// @route : http://localhost:5001/api/blogs
// post blogs
// privet

router.post ('/', async (req,res)=>{
    const {title, description,img} = req.body
    try {
        const blogs = new blog ({
            title,
            description,
            img
        })
        const Blog = await blogs.save();
        res.json({msg:'blog added',Blog})
    } catch (error) {
        console.log(error.message)
    }
})

// @route : http://localhost:5001/api/blogs
// get blogs
// public

router.get ('/', async (req,res)=>{
    try {
        const Blog = await blog.find()
        res.json({msg:'blogs fetched',Blog});
    } catch (error) {
        console.log(error)
    }
})



// @route : http://localhost:5001/api/blogs
// delete blogs
// private

router.delete("/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const blogdeleted = await blog.findOneAndDelete({ _id });
      res.json({ msg: "blog deleted", blogdeleted });
    } catch (error) {
      console.log(error);
    }
  });



module.exports = router;