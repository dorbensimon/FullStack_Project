//I make sure to connect to Mongo

require('dotenv').config();
const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,
             { useNewUrlParser: true });

        console.log("mongo db conection secces");
    } catch (error) {
        console.log(error)
        console.log("mongodb conection Fails");
        process.exit(1);
        
    }
}

module.exports=connectDB;