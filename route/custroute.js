const express=require('express');
const router=express.Router();
const custom=require('../module/customer')
router.get('/out',async(req,res)=>{
    try{
        const input= await custom.find();
        res.json(input);
    }catch(err){
        res.send('error'+err);
    }

    
})

router.post('/add',(req,res)=>{
    const postes=new custom({
           name:req.body.name,
           email:req.body.email,
           password:req.body.password,
           mobile:req.body.mobile,
           pincode:req.body.pincode,
    });
    
       const output= postes.save()
        .then(data=>{
            res.json(data);
        })
  
 
    
});

module.exports=router;