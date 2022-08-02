const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    productName: {type:String},
    price: {type:Number},
    description:{type:String},
},
{
versionKey:false,
timeStamps:true,
})
const productdata=mongoose.model("product",productSchema);
module.exports=productdata;