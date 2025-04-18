const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB_URI = process.env.MONGODB_URI;

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(mongoDB_URI,{
        });
        console.log(`MongoDb Connected: {conn.connection.host}`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}
module.exports = connectDb;