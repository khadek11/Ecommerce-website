const express = require("express")
const app =express()
const bodyparser = require('body-parser')
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv").config();
const CategoryRoutes = require('./routes/CategoryRoute')
const productRoutes = require('./routes/ProductRoutes')
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");


app.use(cors());
app.options('*', cors())
app.use((req, res, next) => {''
  res.header('Access-Control-Allow-Origin', 'https://ecommerce-website-khaki-five.vercel.app/', 'https://dreamy-wisp-15722e.netlify.app/', 'https://adminclientpanel.netlify.app/');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter, cors());
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter );
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter, cors()) ;

app.use('/api/Category', CategoryRoutes)
app.use('/api/products', productRoutes)

app.use(notFound);
app.use(errorHandler);
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("Database connection is ready")
  app.listen(process.env.PORT, () => {
    console.log(`Server is running  at PORT ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log(err)
})


