//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/dbConnection.js';
import router from './Router/productRoute.js';
import cors from 'cors'
import path from 'path'

console.log(process.env.MONGO_URI);
connectDB();
const app = express();
app.use(cors());
const PORT=process.env.PORT || 5000;
app.use(express.json())
app.use('/api/products', router)
const __dirpath = path.resolve();

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirpath, "/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirpath,"frontend","dist","index.html"))
    })
}
app.listen(PORT,()=>{
    console.log("Hello Bro! Hope You are Doing Great..!")
})