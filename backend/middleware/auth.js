

const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const checkUserAuth = async(req, res, next) => {
    try {
        const { authorization } = req.headers
        if(!authorization || !authorization.startsWith('Bearer')){
            return res.status(500).json({ message: "Unauthorized User", error: error.message})
        }
        const token = authorization.split(' ')[1]
        const { id } = jwt.sign(token, process.env.JWT_SECRET)
        const user = await userModel.find({ id }) 
        
        if(!user){
            return res.status(500).json({message: "User not found", error: error.message})

        }
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({message: "Invalid token", error: error.message})
    }
    
    
}
module.exports = checkUserAuth