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
    fullName:{
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

userSchema.pre("save", async function (next) {//password ko encrypt karne ke lie

    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()

})

userSchema.methods.isPasswordCorrect=async function (password) {
    return await bcrypt.compare(password,this.password)
     
}
userSchema.methods.genrateAccessToken=function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    })
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY

    }
}
userSchema.methods.genrateRefreshToken=function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    })
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY

    }
}
export const User= mongoose.model("User",userSchema)