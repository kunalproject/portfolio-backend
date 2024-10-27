const express =require('express')
const app= express();
const bodyparser=require('body-parser')
require('dotenv').config();
app.use(bodyparser.json());
const db=require('./db.js')
const User=require('./user.js')
app.get('/',(req,res)=>{
    res.status(201).json({"msg":"its working fine"})
})
app.post('/data',async (req,res)=>{
    console.log("request made")
try{
        const user_date =req.body;
        const {mail}=req.body
        const find_mail= await User.findOne({mail:mail});
        if(find_mail){
            return res.status(501).json({error:"mail already exist"})
        }
    const new_user= new User(user_date);
    const saved_user=await new_user.save()
    res.status(201).json({user:saved_user});
}
catch(err){
    res.status(500).json({"error":err})
}

})
app.listen(process.env.PORT,()=>{
    console.log("app is running on port ", process.env.PORT)
})
