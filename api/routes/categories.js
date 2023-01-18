import express from "express"
import Category from "../models/Category.js"

//CREATE CATEGORY
const router = express.Router()

router.post("/", async(req, res)=>{
    const newCat = new Category(req.body)
    try{
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)
    }
    catch(err){
        res.status(500).json(err)
    }  
    
})

router.get("/", async (req, res)=>{
    try{
       const cat = await Category.find()
       res.status(200).json(cat)
    }
    catch(err){
        res.status(500).json(err)
    }
})

export default router;
