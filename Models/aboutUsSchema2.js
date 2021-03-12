const mongoose = require("mongoose");

const schema = mongoose.Schema;

const aboutUsSchema2 = new schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

module.exports = aboutUs2 = mongoose.model("aboutUs2", aboutUsSchema2);
