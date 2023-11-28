const express = require('express')
const { register, login, changePassword, sendEmail, resetEmailPassword } = require('../controller/userController')
const checkUserAuth = require('../middleware/auth')
const userRouter = express.Router()

userRouter.use('/changePassword/:id', checkUserAuth)
userRouter.post('/sendresetemail', sendEmail)
userRouter.post('/resetpassword/:id/:token', resetEmailPassword)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.patch('/changepassword/:id', changePassword)


module.exports = userRouter