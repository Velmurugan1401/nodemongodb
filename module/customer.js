const mongoos=require('mongoose');
var cutomerschema= new mongoos.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
})
module.exports=mongoos.model("customer",cutomerschema)