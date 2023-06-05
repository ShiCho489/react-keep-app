import asyncHandler from 'express-async-handler'

import User from '../models/userModels'


const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, pic } =req.body;

    const userExits = await User.findOne({ email })

    if(userExits) {
        res.status(400);
        throw new Error("User already exists");
    }


    const user = await User.create({
        name,
        email,
        password,
        picture,
    })

    if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          pic: user.pic,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
    });

    res.json ({
        name,
        email,
    })
})

export default registerUser