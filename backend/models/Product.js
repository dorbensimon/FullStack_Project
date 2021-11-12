
//Here we write down the Schema on how our products will be built
//When a field is mandatory to fill then in that case we mention it as required.
// So here "name" is not required or mandatory field.

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  countInStock:{
      type:Number,
      required: true
  },
  imageUrl:{
      type:String,
      required:true
  }
});

const Product=mongoose.model("product",productSchema);

module.exports=Product;