import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import { DB_NAME } from '../contants.js';

const connectDB =async() => {
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}`)
       console.log(`\n MongoDB Connected !! DB HOST:${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MongoDB connection error:",error)
        process.exit(1)
        
    }
  
}

export default connectDB