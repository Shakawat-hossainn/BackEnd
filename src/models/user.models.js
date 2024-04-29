import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            index:true,
            unique:true
        },     email:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
           
            unique:true
        },
        fullName:{
            type:String,
            required:true,
          
            trim:true,
           
            unique:true
        },
        avatar:{
            type:String,//cloudinary
        },
        coverImage:{
            type: String,
        },
        password:{
            type:String,
            required:[true,"Password is required"]

        },
        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshToken:{
            type : String
        }

    },{timestamps:true})

    export const User = mongoose.model("User",userSchema)