const mongoose=require('mongoose');
 const userschema =new mongoose.Schema({
    name:{
        type:String
    }
    ,
    mail:{
        type:String,
        unique:true

    },
    msg:{
        type:String
    }
 })
 const User= mongoose.model('User',userschema);
 module.exports=User