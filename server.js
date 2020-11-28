const Express=require('express');
const mongose=require('mongoose');
const poste=require('./route/custroute');
const flist=require('./route/food');
const bodypar=require('body-parser');
const { json } = require('body-parser');
mongose.connect("mongodb+srv://food:food1234@cluster0.uonx3.mongodb.net/food?retryWrites=true&w=majority",{useNewUrlParser:true,  useUnifiedTopology: true },()=>{
    console.log("connect db")
})
const app=Express();
app.use(bodypar.json());




app.use('/foodlist',flist)

app.use('/postes',poste);
app.listen(5000)