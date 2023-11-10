import mongoose from "mongoose";

const reviewSchema=mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  rating:{
    type:Number,
    require:true
  },
  comment:{
    type:String,
    require:true
  },
},{
  timestamps:true
})

const productSchema =mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true
  },
  brand:{
    type:String,
    required:true,
    unique:true
  },
  category:{
    type:String,
    require:true,
  },
  discription:{
    type:String,
    require:true,
  },
  rating:{
    type:Number,
    require:true,
    default:0
  },
  numReviews:{
    type:Number,
    require:true,
    default:0
  },
  reviews:[reviewSchema],
  price:{
    type:Number,
    require:true,
    default:0
  },
  countInStock:{
    type:Number,
    require:true,
    default:0
  },
  user:{
    type:mongoose.Schema.Types.ObjectId ,
    required:true,
    ref:'User'
  },
},{
  timestamps:true
})

const Product= mongoose.model('Product',productSchema);
export default Product