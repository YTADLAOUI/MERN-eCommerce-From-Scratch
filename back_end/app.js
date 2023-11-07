const express= require("express");
const app=express()
require("dotenv").config();
const products=require("./src/database/products");
const ConnectionMg = require("./src/database/ConnectionMg");



app.get("/",(req,res)=>{
  res.send(products);
})
app.get('/api/products',(req,res)=>{
  console.log("yes")
  res.status(200).json(products);
})
app.get("/api/product/:id",(req,res)=>{
  const id= req.params.id
  const product = products.find((p)=>(p._id==id));
  console.log(product)
res.status(200).json(product)
})
const PORT= process.env.PORT || 5000;
ConnectionMg.conncctDB()
app.listen(PORT,console.log(`Server running on port ${PORT} ...`));