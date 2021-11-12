const {getProductsById,getAllProducts}=require('../controller/productControllers')

const express = require('express');
const router=express.Router();

//Get all products from db
//route Get /api/products
//access Public
router.get('/',getAllProducts)

//Get a products by id from db
//route Get /api/products/:id
//access Public
router.get('/:id',getProductsById)

module.exports=router;
