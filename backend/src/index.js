
const AuthController = require("./controllers/auth.controller")
const ProductController = require("./controllers/product.controller")


const express=require("express");

const app=express();


const cors=require("cors");
app.use(cors());

app.use(express.json());

app.use('/user',AuthController)
app.use('/product',ProductController)




 module.exports=app;