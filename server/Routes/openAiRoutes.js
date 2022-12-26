const express = require("express");
const router=express.Router()
const {generateImage}=require('../Controller/openAiController')

router.post('/generateImage',generateImage)

module.exports=router