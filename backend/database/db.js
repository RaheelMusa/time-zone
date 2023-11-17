const mongoose = require('mongoose')

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`Database connected successfully`)
    }).catch(err=>{
        console.log(`Database not found ${err}`)
    })
}
module.exports = connectDB