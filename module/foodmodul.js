const mongoos=require('mongoose');
var foodschema= new mongoos.Schema({
    restaurant:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true

    },
    foodname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
module.exports=mongoos.model("foodlist",foodschema)