 const mongoose = require('mongoose')

 const productSchema = new mongoose.Schema({
        title: {
            type:String
        },
        descripton: {
            type: String
        },
        price: {
            type: Number
        },
        review: {
            type: String
        },
        image: { type: String },
        rating: {type: String},
        color: {type: String}
 })
 const productModel = new mongoose.model("Products", productSchema)

 module.exports = productModel