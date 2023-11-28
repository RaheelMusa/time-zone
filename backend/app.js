require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const port = process.env.PORT || 5000
connectDB()
app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use('/api', productRoutes)
app.use("*", (req, res) => {
    res.status(404).json({message: "page not found"})
})
app.listen(port, ()=>{
    console.log(`Server is listening on Port ${port}`)
})