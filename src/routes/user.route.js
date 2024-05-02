import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js"

const router = Router()

router.route("/").get((req,res) => {
    res.send("hello")
  
}
)
router.route("/register").post(registerUser)


export default router