import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import Post from "../models/Post.js"

const router = express.Router()

//REGISTER

router.post("/register", async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword      
        })
        const user = await newUser.save()
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})


router.post("/login", async (req, res)=>{

    try{
        const user = await User.findOne({username: req.body.username})
        if(!user) res.status(401).json("Wrong credential")
        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        if(!checkPassword) res.status(401).json("Wrong password")
        const {password, ...others} = user._doc
        res.status(200).send(others)
    }
    catch(err){
        res.status(500).json(err)
    }
    
})




export default router;