import mongoose, { Schema, model } from 'mongoose';

interface Coupon {
  name: string;
  expiry: Date;
  discount: number;
}

// Declare the Schema of the Mongo model
const couponSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

// Export the model
export default model<Coupon>('Coupon', couponSchema);