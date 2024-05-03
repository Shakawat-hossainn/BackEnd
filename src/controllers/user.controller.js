import { errorHandler } from "../utils/errorHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = errorHandler(async  (req,res,next)=>{
  // take details from the frontend
  // user already exists?
  // upload avatar and cover image on cloudinary
  // user creation
  // remove password and refresh token
  // return response
  
   const {username,email,fullName,password} = req.body

   if(
    [username,fullName,email,password].some((field)=>field?.trim() ==="")
   ){
   throw new ApiError(400,"All fields are required")
   }

  const existedUser = await User.findOne({
    $or: [{username},{email}]
   })
   //console.log(existedUser)
   if(existedUser){
    throw new ApiError(409,"User with email or username already exists ")
   }
 
   const avatarLocalPath = req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0]?.path
  // console.log(coverImageLocalPath)
  
  
 const avatar = await uploadOnCloudinary(avatarLocalPath)
 const coverImage = await uploadOnCloudinary(coverImageLocalPath)
 if(!avatar)
 {
  throw new ApiError(400,"Avatar file is required")
 }
const user = await User.create({
  fullName,
  avatar:avatar.url,
  coverImage:coverImage?.url || "",
  email,
  password,
  username:username.toLowerCase()
 })

   const createdUser = await  User.findById(user._id).select(
      "-password -refreshToken"
     ) 
   
if(!createdUser){
  throw new ApiError(500,"Something went wrong while registering the user")
}

res.status(201).json(
  new ApiResponse(200,createdUser,"User created successfully")

)

})

// const loginUser = errorHandler(async (req,res,next)=>{
//   // email or password from req.body
//   // user ???
//   // email or password ??
//   // access token and refresh token 
//   const {email,password} = req.body
//   if(!email || !password){
//     throw new ApiError(400,"email or passwaord are required")

//   }
//   User.findOne={
//     $or:[{email},{password}]
//   }
// if(!User){
//   throw new ApiError(400,"User not found")
// }
// })

export {
    registerUser,
}