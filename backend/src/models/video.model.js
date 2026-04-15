import mongoose, { mongoosePopulatedDocumentMarker, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate"


const videoSchema=new mongoose.Schema({
    videFile:{
        type:String,
        required:true
    },
    thumbnail:{
         type:String,
        required:true
    },
    title:{
         type:String,
        required:true
    },description:{
         type:String,
        required:true
    },duration:{
          type:String,
        required:true
    },views:{
         type:String,
        default:0
    },isPublished:{
         type:Boolean,
        default:true
    },owner:{
        type:Schema.Types.ObjectId,
        ref:"User"

    }
},{timestamps:true})
videoSchema.plugin(mongoosePopulatedDocumentMarker)
export const Video=mongoose.model("Video",videoSchema)