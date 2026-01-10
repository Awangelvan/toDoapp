import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import userRoute from "../Backend/routes/userRoute.js";
import router from "../Backend/routes/userRoute.js";

dotenv.config()
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(userRoute);


app.get("/",(req,res)=>{
    res.send(`server up and running`)
})


app.listen(port,()=> console.info(`server now running on  ${port}`))