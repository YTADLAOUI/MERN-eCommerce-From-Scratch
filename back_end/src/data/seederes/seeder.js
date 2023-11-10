const mongoose= require('mongoose')
 const {Order} =require("../../models/orderModel")
const {users} =require("../users") 
const {User} = require('../../models/UserModel')
const {Product} = require('../../models/ProductModel')
const { products } = require('../products')
 const importData=async ()=>{
  console.log(users);
  console.log(User)
  try{
     await User.deleteMany()
     await Order.deleteMany()
     await Product.deleteMany()
     const createdUser=await User.insertMany(users);
    const adminUser= createdUser[0]._id
    console.log(adminUser);
    const sampleProducts =products.map(product=>{
      return {...product, user: adminUser}
    })
    console.log(sampleProducts)
    await Product.insertMany(sampleProducts)
    console.log('dataImported')
    process.exit()
  }catch(error){
console.log(error)
process.exit(1)
  }
}
const destroyData=async ()=>{
  console.log('deleted')
  try{
     await User.deleteMany()
     await Order.deleteMany()
     await Product.deleteMany()

    console.log('dataDeleted')
    process.exit()
  }catch(error){
  console.log(error)
  process.exit(1)
  }
}
if(process.argv[2]==='-d'){
  destroyData()
}else{
  importData()
}