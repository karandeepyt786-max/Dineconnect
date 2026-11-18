const express = require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("hlo its me")
})

app.listen(3000)