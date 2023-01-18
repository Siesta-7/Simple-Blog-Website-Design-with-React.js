import express from "express";
import Post from "../models/Post.js";

const router = express.Router()

//CREATE POST
router.post("/", async (req, res)=>{
    const newPost = new Post(req.body)
    try{    
        const post = await newPost.save()
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE POST

router.put("/:id", async (req, res)=>{
    
    try{
        const post = await Post.findById(req.params.id)
        if (req.body.username === post.username) {
            const updatedPost= await Post.findByIdAndUpdate(req.params.id, 
            {$set:req.body},
            {new:true})    
            try{
                res.status(200).json(updatedPost)
            }
            catch(err){
                res.status(500).json(err)
            }
        }
        else{
            res.status(401).json("Not authorized")
        }
    }
    catch(err){
        res.status(500).json("Post not found")
    }
 
})

router.delete("/:id", async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username){
            try{
               await post.delete()
               res.status(200).json("Post has been deleted.")
            }   
            catch(err){
                res.status(500).json(err)
            }
        }
        else{
            res.status(401).json("Not authorized")
        }
    }
    catch(err){
        res.status(500).json("Post not found")
    }
})

//GET POST
router.get("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json("Post not found")
    }  

})

// GET ALL POSTS
router.get("/", async (req, res)=>{
    const username = req.query.user
    const catName = req.query.cat
    try{
        let posts;
        if(username) {
            posts = await Post.find({username:username})
        }
        else if (catName) {
        posts = await Post.find({
            categories:{
                $in: [catName]
            },
          })
        }            
        else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
}
)

export default router