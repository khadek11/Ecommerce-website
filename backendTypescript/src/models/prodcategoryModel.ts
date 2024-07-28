import mongoose, { Schema, model } from 'mongoose';

interface ProdCategory {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

// Declare the Schema of the Mongo model
const prodcategorySchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export default model<ProdCategory>('PCategory', prodcategorySchema);