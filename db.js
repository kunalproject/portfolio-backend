const mongoose =require('mongoose')
// const data_base_url="mongodb://localhost:27017/portfolioData"
require('dotenv').config();
const atlasUrl = process.env.ATLAS_URL ;
mongoose.connect(atlasUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection
db.on('connected',()=>{
    console.log("connection establish with data base");
})
db.on('disconnect',()=>{
console.log("connect has been disconnected with data base")
}
)
module.exports=db;
