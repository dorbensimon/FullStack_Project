require('dotenv').config();
const express =require('express');
const connectDB=require('./config/db')
const productRoutes=require('./routes/productRoutes');

//For Be connected to Mongo
connectDB();

const app=express();

//It's for the customer, to receive and send data
app.use(express.json());

//Routes

//any request going to http localhost5000/api/products will have access to these routes
app.use('/api/products',productRoutes);





const PORT =process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`)
})