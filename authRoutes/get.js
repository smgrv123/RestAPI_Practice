const express=require('express')
const router=express.Router()
const auth=require('../models/Auth')

router.get('/', async (req,res)=>{
    try {
        const getDate=await auth.find()
        res.send(getDate)
    } catch (error) {
        res.send('error')
    }
})

module.exports=router