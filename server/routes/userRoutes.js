import express from "express";
import  registerUser from "../controllers/userController.js"
const router = express.Router()


router.route("/").post(registerUser);
router.post("/login");
router.route("/profile").post();

export default router;