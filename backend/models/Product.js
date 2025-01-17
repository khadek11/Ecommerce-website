const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    required: true,
  },
  images:[{
    type:String,
    required:true
}],
  brand: {
    type: String,
    default: ""
  },

  price: {
    type: Number,
   default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  countInStock: {
    type: Number,
    default: 0,
    required: true
    
  },
  rating: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured:{
    type: Boolean,
    default:false
  },
  dateCreated:{
    type: Date,
    default:Date.now
  }
});
exports.Product= mongoose.model('Productmodel' , productSchema)
