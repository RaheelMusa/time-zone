const express = require('express')
<<<<<<< HEAD
const { register, login, changePassword, sendEmail, resetEmailPassword } = require('../controller/userController')
=======
const { register, login, changePassword, sendEmail, resetPassword} = require('../controller/userController')
>>>>>>> b45367f2e1ecb278b7034a2f862bb6b4852db631
const checkUserAuth = require('../middleware/auth')
const userRouter = express.Router()

userRouter.patch('/changePassword/:id', checkUserAuth, changePassword)
userRouter.post('/sendresetemail', sendEmail)
userRouter.post('/resetpassword/:id/:token', resetEmailPassword)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/resetpassword/:id/:token', resetPassword)
// userRouter.patch('/changepassword/:id', changePassword)


module.exports = userRouter