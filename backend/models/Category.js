const mongoose = require ('mongoose')

const CategorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    images:[{
        type:String,
        required:true
    }],
    color:{
        type:String,
        required:true
    },
})

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;