const express=require('express');
const router=express.Router();
const food=require('../module/foodmodul')
router.get('/fout',async(req,res)=>{
    try{
        const input= await food.find();
        res.json(input);
    }catch(err){
        res.send('error'+err);
    }

    
});
router.post('/fin',(req,res)=>{
    const postes=new food({
           restaurant:req.body.restaurant,
           category:req.body.category,
           foodname:req.body.foodname,
           price:req.body.price,
           stock:req.body.stock,
           description:req.body.description,
           
    });
    
       const output= postes.save()
        .then(data=>{
            res.json(data);
        })
  
 
    
});

module.exports=router;