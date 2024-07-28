import mongoose, { Schema, model, Types } from 'mongoose';

enum OrderStatus {
  NotProcessed = 'Not Processed',
  CashOnDelivery = 'Cash on Delivery',
  Processing = 'Processing',
  Dispatched = 'Dispatched',
  Cancelled = 'Cancelled',
  Delivered = 'Delivered',
}

interface OrderProduct {
  product: Types.ObjectId;
  count: number;
  color: string;
}

interface Order {
  products: OrderProduct[];
  paymentIntent: any;
  orderStatus: OrderStatus;
  orderby: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Declare the Schema of the Mongo model
const orderSchema: Schema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: Types.ObjectId,
          ref: 'Product',
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: OrderStatus.NotProcessed,
      enum: Object.values(OrderStatus),
    },
    orderby: {
      type: Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export default model<Order>('Order', orderSchema);