import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        videoIFile:{
            type: String,//cloudinary
            required:true,


        },
        thumbnail:{
            type: String,//cloudinary
            required:true,


        },
        title:{
            type: String,
            required:true,


        },
        description:{
            type: String,
            required:true,


        },
        views:{
            type: Number,
            default:0,
            required:true,


        },
        duration:{
            type: Number,
            required:true,


        },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,


        },
        isPublished:{
            type: Boolean,
            default:false,
            required:true,


        },
    },{timestamps:true})


export const Video = mongoose.model("Video",videoSchema)