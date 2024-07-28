import mongoose, { Schema, model } from 'mongoose';

interface Color {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

// Declare the Schema of the Mongo model
const colorSchema: Schema = new mongoose.Schema(
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
export default model<Color>('Color', colorSchema);