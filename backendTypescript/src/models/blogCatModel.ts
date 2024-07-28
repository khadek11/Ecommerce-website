import mongoose, { Schema, model } from 'mongoose';

// Declare the Schema of the Mongo model
const blogcategorySchema: Schema = new mongoose.Schema(
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
export default model('BCategory', blogcategorySchema);