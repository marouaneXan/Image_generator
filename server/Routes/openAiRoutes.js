const express = require("express");
const router=express.Router()

router.post('/generateImage',(req,res)=>{
    res.send("Image generated")
})

module.exports=router