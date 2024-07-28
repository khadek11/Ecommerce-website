import mongoose, { Schema, model, Document } from 'mongoose';

interface ProductImage {
  public_id: string;
  url: string;
}

interface ProductRating {
  star: number;
  comment: string;
  postedby: mongoose.Types.ObjectId;
}

interface Product {
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  quantity: number;
  sold: number;
  images: ProductImage[];
  color: string[];
  tags: string;
  ratings: ProductRating[];
  totalrating: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: String,
      url: String,
    },
  ],
  color: [],
  tags: String,
  ratings: [
    {
      star: Number,
      comment: String,
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
  totalrating: {
    type: String,
    default: 0,
  },
}, { timestamps: true });

export default model<Product & Document>('Product', productSchema);