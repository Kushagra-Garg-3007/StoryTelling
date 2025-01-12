require('dotenv').config()
const express = require("express");
const app = express();
const mongoose=require('mongoose');
const cors = require('cors');
const userRoutes=require('./routes/user.routes.js');
const cookieParser=require('cookie-parser');

const PORT = process.env.PORT||5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
}));
app.use(cookieParser());

mongoose.connect(`${process.env.MONGO_URL}`)
.then(()=>console.log("Connected to MongoDB!"))
.catch((err)=>console.error("Error connecting to MongoDB!",err));

app.use('/',userRoutes);
app.use('/user',userRoutes);

app.listen(PORT, () => console.log("Server running on port " + PORT));