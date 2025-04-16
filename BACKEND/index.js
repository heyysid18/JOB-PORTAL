 import express from "express";
 import cookieParser from "cookie-parser";
 import cors from "cors";
 import dotenv from "dotenv";
 import connectDB from "./utils/db.js";
 import userRoute from "./routes/user.route.js";
 import companyRoute from "./routes/company.route.js"
 import jobRoute from "./routes/job.route.js" 
 import applicationRoute from "./routes/application.route.js"
 dotenv.config({});
 const app = express();

 //MIDDLEWARE
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser());
 const corOptions = {
    origin:'http//localhost:5173',
    credentials:true
 }
app.use(cors(corOptions));



 const port =process.env.port || 3000;

 //apis
 app.use("/api/v1/application",applicationRoute);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);

 app.listen(port,()=>{
    connectDB();
    console.log(`Server running at port ${port}`);
 } )