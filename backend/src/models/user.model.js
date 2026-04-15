import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true// for searching
    },
    email:{
         type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    
    },
    fullname:{
        type:String,
        required:true,
       
        trim:true,
        index:true
    
    },
    avatar:{

         type:String,//cloudinary url
        required:true,
  
    },
    coverimage:{

         type:String,//cloudinary url

  
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"],


    },
    refreshToken:{
        type:String
    }
    
},{timestamps:true})

export const User= mongoose.model("User",userSchema)