const express= require("express");
const app=express()
const products=require("./src/database/products")
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
console.log('first')
app.listen(5000,console.log('Server running on port 5000'));