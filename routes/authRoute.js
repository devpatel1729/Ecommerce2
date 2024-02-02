import express from 'express';
import {registerController,loginController, forgotPasswordController} from '../controllers/authController.js'
import {requireSignIn,isAdmin} from "../middlewares/authMiddleware.js"

//router object
const router = express.Router()

//routing
//Register || Method Post
router.post('/register',registerController)

//Login || Post
router.post("/login",loginController)

//Forgot password || Post
router.post('/forgot-password',forgotPasswordController)

//protected user route auth
router.get("/user-auth",requireSignIn,(req,res) => {
    res.status(200).send({ok:true});
})

//protected route auth admin
router.get("/admin-auth",requireSignIn,isAdmin,(req,res) => {
    res.status(200).send({ok:true});
})

export default router;