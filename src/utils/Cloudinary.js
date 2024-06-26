import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key:  process.env.API_KEY, 
  api_secret:  process.env.API_SECRET 
});

const uploadOnCloudinary = async function(localFilePath){
  try {
    if(!localFilePath)return null

    const response = await cloudinary.uploader.upload(localFilePath,{
     resource_type: "auto"


    })
    console.log("File is uploaded on cloudinary", response.url)
    return response
  } catch (error) {
   fs.unlinkSync(localFilePath)
   return null
    
  }
}

export  {uploadOnCloudinary}

