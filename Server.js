const express = require ('express')
const connectDB = require ('./config/db')

const app = express ()

//init middleware
app.use (express.json())

//connect database
connectDB();

//define routes
app.use ("/api/newsletter", require ("./routes/newsletter"))

const PORT = process.env.PORT || 5001;

app.listen (PORT, ()=> console.log(`server start on port ${PORT}`));
