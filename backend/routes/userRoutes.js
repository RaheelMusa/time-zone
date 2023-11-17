const express = require('express')
const { register, login, changePassword } = require('../controller/userController')
const checkUserAuth = require('../middleware/auth')
const userRouter = express.Router()

userRouter.use('/changePassword/:id', checkUserAuth)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.patch('/changePassword/:id', changePassword)


module.exports = userRouter