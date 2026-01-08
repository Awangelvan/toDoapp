import express from "express";
import cors from "cors";
import userRoute from "../Backend/routes/userRoute.js";
import router from "../Backend/routes/userRoute.js";

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(userRoute);


app.get("/",(req,res)=>{
    res.send(`server up and running`)
})


app.listen(port,()=> console.info(`server now running  ${port}`))