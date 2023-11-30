
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");
const { transporter } = require('../middleware/email');
const register = async(req, res ) =>{
 const {firstName, lastName, email, password} = req.body;
 try {
    if(!firstName || !lastName  || !email || !password  ){
        return res.status(500).json({message: "all field are required"})
    }
    const existingUser = await userModel.findOne({ email })
    if(existingUser){
        return res.status(500).json({message: "Email aready exist"})
    } 
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,

    })
    const token = jwt.sign({
        email: user.email, id: user._id
    }, process.env.JWT_SECRET)

    res.status(200).json({message: "Successfully registered your account", user: user, token})
 } catch (error) {
    res.status(500).json({ message: "An error occur while registering your account"})
 }
}
const login = async(req, res ) => {
    const {email, password} = req.body;
    try {
        if(!email || !password) {
            return res.status(401).json({message: "Email or password required"})
        }       
        const existingUser = await userModel.findOne({ email })
        if(!existingUser){
            return res.status(500).json({message: "Invalid email"})
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if(!matchPassword){
            return res.status(500).json({message: "Invalid Credentials"})
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '5d'})
        return res.status(200).json({success: true, message: "Login successfully", user: existingUser, token})
    } catch (error) {
        res.status(500).json({ message: "An error occur while registering your account"})
        
    }

}
const changePassword =async (req, res ) =>{
    const {currentPassword, newPassword, confirmPassword} = req.body
    try {
        if(!currentPassword || !newPassword || !confirmPassword) {
                return res.status(500).json({message: "All field are required"})
        }
        if(newPassword !== confirmPassword){
            return res.status(401).json({message: 'newpassword and confirmPassword didnt match'})
        }
        const user = req.user
        const verifyPassword = await bcrypt.compare(currentPassword, user.password)
        if( !verifyPassword){
            return res.status(500).json({message: "Password didn't matched"})
        }
        const newHashedPassword = await bcrypt.hash(newPassword, 10)
        await userModel.findByIdAndUpdate(user._id, {$set: {password: newHashedPassword}})
        return res.status(201).json({message: `Your password pass been updated successfully`})
    } catch (error) {
        return res.status(500).json({message: "An error while updating your password", error: error.message})
    }
}
const sendEmail =async (req, res ) =>{
    const { email } = req.body;

    try {
        if(!email){
            return res.status(400).json({message: "Email doesn't exists"})
        }
        const user = await userModel.findOne({ email })
        if(!user){
            return res.status(400).json({message: "No user exist with this email"})
        }
        const secret = user._id + process.env.JWT_SECRET
        const token = jwt.sign({ id: user._id}, secret, {expiresIn: '30min'})
        const resetLink = `${process.env.BASE_URL}/api/resetpassword/${user._id}/${token}`
        const message = `We have  received a password reset request. Please use the link below to reset your password. \n\n${resetLink}\n\n. This link is valid for 30 minutes.`
        console.log(resetLink)

        let mailOptions = {
            from: process.env.EMAIL_FROM,
            to: user.email,
            subject: "Reset password request received",
            text: message
        }
        await transporter.sendMail(mailOptions, (err, data)=>{
            if(err){
                console.log("error occur", err)
            }else{
                console.log("Email sent to ", user.email)
            }
        })
      
        return res.status(201).json({ message: "Reset email sent to your gmail account"})



    } catch (error) {
        return res.status(500).json({message: "An error occur while sending email", error: error.message})
    }

}

const resetPassword = async(req, res ) =>{
    const {password, confirmPassword} = req.body;
    const { id, token } = req.params
    const user = await userModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET

    try {
        if(!password || !confirmPassword){
            return res.status(400).json({message: "Both field are required"})
        }
        if(password !== confirmPassword){
                return res.status(500).json({message:" Password didn't matched"})
        }   

        try {
                 const verifyToken = jwt.verify(token, new_secret)
                
             } catch (jwtError) {
                return res.status(400).json({message: "Inavalid token", error: jwtError.message})
             }
             const newHashedPassword = await bcrypt.hash(password, 10)
             await userModel.findByIdAndUpdate(user._id, {$set: {password: newHashedPassword}})
             return res.status(201).json({message: "Your password has been reset succesfully"})
        
    } catch (error) {
        
        return res.status(400).json({message: "An error occur while resetting your password"})
    }
}

module.exports ={ register, login, changePassword, sendEmail, resetPassword}
