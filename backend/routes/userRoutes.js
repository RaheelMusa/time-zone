const express = require('express')
const { register, login, changePassword, sendEmail, resetPassword} = require('../controller/userController')
const checkUserAuth = require('../middleware/auth')
const userRouter = express.Router()

userRouter.patch('/changePassword/:id', checkUserAuth, changePassword)
userRouter.post('/sendresetemail', sendEmail)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/resetpassword/:id/:token', resetPassword)
// userRouter.patch('/changepassword/:id', changePassword)


module.exports = userRouter