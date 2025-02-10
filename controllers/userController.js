const users = require('../model/userModel')
const jwt = require('jsonwebtoken')

exports.registerController = async(req,res)=>{
    console.log("Register User");
    const {username,email,password,phone} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exist")
        }else{
            const newUser = new users({username,email,password,phone})
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.loginController = async(req,res)=>{
    console.log("Inside loginController");
    const {email,password} = req.body
    console.log(`Email : ${email} & Password : ${password}`);
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
            res.status(200).json({user:existingUser,token})
        }
        else{
            res.status(404).json("You have entered the wrong credentials")
        }
    }catch(err){
        res.status(401).json(err)
    }
    
}

exports.listUsersController = async (req, res) => {
    try {
        const allUsers = await users.find({}, '-password')
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getUserController = async (req, res) => {
    try {
        const user = await users.findById(req.params.id, '-password')
        if (!user) return res.status(404).json("User not found")
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getUserController = async (req, res) => {
    try {
        const user = await users.findById(req.params.id, '-password')
        if (!user) return res.status(404).json("User not found")
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}