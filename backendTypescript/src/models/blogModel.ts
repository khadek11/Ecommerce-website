import mongoose, { Schema, model, Types } from 'mongoose';

interface Blog {
  title: string;
  description: string;
  category: string;
  numViews: number;
  isLiked: boolean;
  isDisliked: boolean;
  likes: Types.ObjectId[];
  dislikes: Types.ObjectId[];
  author: string;
  images: any[];
}

// Declare the Schema of the Mongo model
const blogSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    numViews: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    author: {
      type: String,
      default: "Admin",
    },
    images: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

// Export the model
export default model<Blog>('Blog', blogSchema);