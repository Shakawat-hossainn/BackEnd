import { errorHandler } from "../utils/errorHandler.js";


const registerUser = errorHandler(async  (req,res,next)=>{
    res.status(200).json({
        message : "OK"
    })

})

export {
    registerUser,
}