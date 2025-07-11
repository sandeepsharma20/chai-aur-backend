 import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';
 const connectDB=async()=>{
try{
    const connectionINstance=await mongoose.connect(`${process.env. MONGODB_URI}/${DB_NAME}`)//gives object that hold in this connectionInstance variable
    console.log(`\n mongoDb connected !!DB HOST:${connectionINstance.connection.host}`);
}catch(error){
    console.log("mongoDb connection error:",error);
    process.exit(1)
    
}
 }
 export default connectDB;