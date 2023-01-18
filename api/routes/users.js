import express from "express";
import bcrypt from "bcrypt"
import User from "../models/User.js"
import Post from "../models/Post.js";

const router = express.Router()

//UPDATE USER

router.put("/:id", async (req, res)=>{
    if(req.body.userId === req.params.id) {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {
                    $set:req.body
                }, 
                {new:true})
            res.status(200).send(updatedUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    else{
        res.status(401).json("Not authorized")
    }
})

//DELETE USER 

router.delete("/:id", async (req, res)=>{
    if (req.body.userId == req.params.id){
        
        const user = await User.findById(req.params.id)
        if (!user) res.status(500).json("User not found")
        try{
            await Post.deleteMany({username:user.username})
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    else{
        res.send(401).json("Not authorized")
    }
})

//FIND USER

router.get("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json("User not found")
    } 
})

export default router