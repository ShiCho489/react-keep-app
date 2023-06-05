import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
       
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });


const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, pic } =req.body;

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("User already exists")
    }
  
    const user = await User.create({
        name,
        email,
        password,
        pic,
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
           
        })
        }else {
            res.status(400);
            throw new Error("User not found");

        }
    }
  )

   
    

export  { authUser, registerUser };