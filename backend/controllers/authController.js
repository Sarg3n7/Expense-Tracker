import {User} from '../models/User.js'
import jwt from 'jsonwebtoken';

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

//Register User
const registerUser = async(req, res) => {
    console.log("req.body:", req.body);
    
    const {fullName, email, password, profileImageUrl} = req.body;

    //validation: check for missing fields
    if(!fullName || !email || !password){
        return res.status(400).json({message: "All fields are required"})
    }

    try {
        //check if email already exists
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "Email already in use"})
        }

        //creating the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl
        })

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        })
    } catch (err) {
        res
        .status(500)
        .json({message: "Error registering user", error: err.message})
    }
}

//Login User
const loginUser = async(req, res) => {

}

//Get user information
const getUserInfo = async(req, res) => {

}




export {
    registerUser,
    loginUser,
    getUserInfo
}