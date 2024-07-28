import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { notFound, errorHandler } from './middlewares/errorHandler';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import CategoryRoutes from './routes/CategoryRoute';
import productRoutes from './routes/ProductRoutes';
import authRouter from './routes/authRoute';
import productRouter from './routes/productRoute';
import blogRouter from './routes/blogRoute';
import categoryRouter from './routes/prodcategoryRoute';
import blogcategoryRouter from './routes/blogCatRoute';
import brandRouter from './routes/brandRoute';
import colorRouter from './routes/colorRoute';
import enqRouter from './routes/enqRoute';
import couponRouter from './routes/couponRoute';
import uploadRouter from './routes/uploadRoute';

dotenv.config();

const app: express.Application = express();

const allowedOrigins = [
  'https://ecommerce-website-khaki-five.vercel.app',
  'https://dreamy-wisp-15722e.netlify.app',
  'https://adminclientpanel.netlify.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: (origin: string, callback: (err: Error | null, allow: boolean) => void) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogcategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enqRouter);
app.use('/api/upload', uploadRouter);

app.use('/api/Category', CategoryRoutes);
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection is ready");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running  at PORT ${process.env.PORT}`);
    });
  })
  .catch((err: Error) => {
    console.log(err);
  });