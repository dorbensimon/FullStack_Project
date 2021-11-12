require('dotenv').config();
const ProductData = require('./data/product');//This is all the data that is transferred to the schema
const Product=require('./models/Product')//Schema Page
const connectDB=require('./config/db');

connectDB();

const importData=async()=>{
    try {
        //Deletes all data (if any) in this schema
        await Product.deleteMany({});
        //Inserts all new data
        await Product.insertMany(ProductData);
        console.log("Data Import Seccesfly")

        //Ends the process with the specified code. If omitted, exit uses the 'success' code 0.
        process.exit();
    } catch (error) {
        console.log(error);
        // terminate the process using process.exit(1) to kill the program To exit with a 'failure' code:.
        process.exit(1);
    }
}

importData();