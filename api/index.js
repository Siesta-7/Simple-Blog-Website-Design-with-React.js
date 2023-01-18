import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authUser from "./routes/auth.js";
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import categoryRoute from "./routes/categories.js"
import multer from "multer"

const app = express();
dotenv.config()
app.use(express.json())


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("Mongo is connected")
})


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "images");
    },
    filename:(req,file,cb) =>{
        cb(null, "hello.jpeg")
    }
})

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded.")
})

app.use("/api/auth", authUser)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)



app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})