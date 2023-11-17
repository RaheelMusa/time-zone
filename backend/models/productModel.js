 const mongoose = require('mongoose')

 const productSchema = new mongoose.Schema({
        title: {
            type:String
        },
        desc: {
            type: String
        },
        price: {
            type: Number
        },
        review: {
            type: String
        },
        image: { type: String }
 })
 const productModel = new mongoose.model("Products", productSchema)

 module.exports = productModel