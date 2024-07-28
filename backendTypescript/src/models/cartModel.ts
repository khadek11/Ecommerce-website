import mongoose, { Schema, model, Types } from 'mongoose';

interface CartProduct {
  product: Types.ObjectId;
  count: number;
  color: string;
  price: number;
}

interface Cart {
  products: CartProduct[];
  cartTotal: number;
  totalAfterDiscount: number;
  orderby: Types.ObjectId;
}

// Declare the Schema of the Mongo model
const cartSchema: Schema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        color: String,
        price: Number,
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderby: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export default model<Cart>('Cart', cartSchema);