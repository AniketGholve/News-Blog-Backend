const data = require('../Data/data')
const route=require('express').Router()
route.get("/blogData",(req,res)=>{
    res.send(data)
})

module.exports=route