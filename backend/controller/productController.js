const fileModel = require("../models/file")
const productModel = require("../models/productModel")

exports.getProduct = async(req, res) =>{
    try {
        const data = await productModel.find()
        if(!data){
            return res.status(404).json({message: "No  data found"})
        }
        return res.status(201).json({success: true, data: data})
    } catch (error) {
        return res.status(500).json({message: "An error occur while getting products", error: error.message})
    }
}
exports.createProduct = async(req, res) =>{
    try {
        const file = req.file;
        const uploadImage = new fileModel({ ...file })
        await uploadImage.save()

        const data = await productModel.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            rating: req.body.rating,
            review: req.body.review,
            color: req.body.review,
            image: `http://localhost:5000/api/image/${uploadImage._id}`
            
        })
        return res.status(201).json({success: true, message: "Your product added successfully", data: data})

    } catch (error) {
        return res.status(500).json({message: "An error occur while creating products", error: error.message})
    }
}
exports.updateProduct = async(req, res) =>{
    try {
        const {id} = req.params
        const body = req.body
        const data = await productModel.findByIdAndUpdate(id, body, {new: true})
        if(!data){
            return res.status(404).json({message: "no data found " })
        }
        return res.status(201).json({success: true, message: `Product with id ${id} update successfully`})

        
    } catch (error) {
        return res.status(500).json({message: "An error occur while updating products", error: error.message})
    }
}
exports.deleteProduct = async(req, res) =>{
    try {
        const { id } = req.params
        const data = await productModel.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json({message: "no data found " })
        }
        return res.status(201).json({success: true, message: `Product with id ${id} deleted successfully`})
        
    } catch (error) {
        return res.status(500).json({message: "An error occur while updating products", error: error.message})
    
    }
}

exports.getImage = async(req, res) =>{
    try {
        const { id }= req.params
        const file = await fileModel.findOne({_id: id})
        if(!file){
            return res.status(500).json({message: "Invalid files"})
        }
        res.setHeader("Content-Type", "image/jpeg")
        res.send(file.buffer)
    } catch (error) {
        return res.status(500).json({message: "An error occur while getting your image", error: error.message})
    }
}