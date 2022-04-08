import dotenv from "dotenv"
dotenv.config()
import express from "express";

import mongoose from "mongoose"
mongoose.connect(process.env.DATABASE_URL)

import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app=express();
const port=3000;

const db= mongoose.connection
db.on("error",(error)=>console.error("error"))
db.once("open",()=>console.log("Connected to the Database succesfully"))

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/users",usersRoutes)
app.get("/", (req,res)=>

  res.send("Hello World")
);
app.listen(port,()=>{
  console.log(` app listening at http://localhost:${port}`);
});
