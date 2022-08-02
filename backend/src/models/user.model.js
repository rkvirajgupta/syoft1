const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName: {type:String},
    phone: {type:Number},
    email:{type:String},
    password:{type:String},
    role:{type:String}
},
{
versionKey:false,
timeStamps:true,
})
const userdata=mongoose.model("user",userSchema);
module.exports=userdata;