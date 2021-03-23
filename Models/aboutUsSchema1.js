const mongoose = require("mongoose");

const schema = mongoose.Schema;

const aboutUsSchema1 = new schema({
  redTitle: {
    type: String,
  },
  mainTitle: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = aboutUs1 = mongoose.model("aboutUs1", aboutUsSchema1);
