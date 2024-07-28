import mongoose, { Schema, model } from 'mongoose';

interface Brand {
  title: string;
}

// Declare the Schema of the Mongo model
const brandSchema: Schema = new mongoose.Schema(
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
export default model<Brand>('Brand', brandSchema);