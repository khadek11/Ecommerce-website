import mongoose, { Schema, model } from 'mongoose';

interface Category {
  name: string;
  images: string[];
  color: string;
}

const CategorySchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  color: {
    type: String,
    required: true
  },
});

const Category = model<Category>('Category', CategorySchema);
export default Category;