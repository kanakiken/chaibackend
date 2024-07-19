// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});
connectDB();



















//First approach using IIFE inside index.js to auto invoke connection when index.js is run from nodemon
// import mongoose from "mongoose"; 
// import {DB_NAME} from "./constants";
// import express from "express";
// const app = express();

// ( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error", (error) => console.log("app error", error));        
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }
//     catch(error){
//         console.log("Error From db connection index.js", error);
//     }
// })()