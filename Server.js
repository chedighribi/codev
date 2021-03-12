const express = require("express");
const connectDB = require("./config/db");

const app = express();

//init middleware
app.use(express.json());

//connect database
connectDB();

//define routes

app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/aboutUs1", require("./routes/aboutUs1"));
app.use("/api/aboutUs2", require("./routes/aboutUs2"));
app.use ("/api/cards", require ("./routes/cards"))
app.use ("/api/blog", require ("./routes/blog"))


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));
