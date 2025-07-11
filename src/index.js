 // require('dotenv').config({path:'./env'})
 import express from 'express';
  import dotenv from 'dotenv'

 import connectDB from './db/db.js';
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
console.log(`server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection failed!!!",err);
    
})















//import express for jab data base bat ni kar pa rha hota hai(optional)
//  import express from 'express';
//  import dotenv from "dotenv";
// dotenv.config();
//  import mongoose from 'mongoose';
//  import {DB_NAME} from './constants.js'
//  const app=express();
//  ;(async ()=>{
//     try{
//      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error",(error)=>{
//      console.log("error :",error);
//         throw error
//      })
//      app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//      })
//      throw error;
//      console.log("connected ");
//      console.log(process.env.PORT);
//     }catch(error){
//         console.log("error:",error);
//         throw error;
        
//     }
//  })()