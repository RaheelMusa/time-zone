const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    buffer:{type:  Buffer}
})
const fileModel = new mongoose.model('Image File', fileSchema)
module.exports= fileModel