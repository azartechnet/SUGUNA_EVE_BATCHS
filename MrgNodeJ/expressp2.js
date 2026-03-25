const e1=require('express')
const app=e1();
app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.send("welcome")
    },5000)
}).listen(3000)
console.log("Server Running...")