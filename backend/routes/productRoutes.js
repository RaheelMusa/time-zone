const express = require('express')
const { getProduct, createProduct, updateProduct, deleteProduct, getImage } = require('../controller/productController')
const productRoutes = express.Router()
const multer = require('multer')
const  storage  = multer.memoryStorage()

const upload = multer({ storage })

productRoutes.get('/products', getProduct)
productRoutes.get('/image/:id', getImage)
productRoutes.post('/addproduct', upload.single('image'), createProduct)
productRoutes.patch('/updateproduct/:id', updateProduct)
productRoutes.delete('/deleteproduct/:id', deleteProduct)

module.exports = productRoutes