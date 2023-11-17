const express = require('express')
const { register, login, changePassword, sendEmail } = require('../controller/userController')
const checkUserAuth = require('../middleware/auth')
const { transporter } = require('../middleware/email')
const userRouter = express.Router()

userRouter.use('/changePassword/:id', checkUserAuth)
userRouter.post('/sendresetemail', sendEmail)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.patch('/changepassword/:id', changePassword)


module.exports = userRouter