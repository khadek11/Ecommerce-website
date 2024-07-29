import { useState, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { getColors } from "../features/color/colorSlice";
import { Select } from "antd";
import { createProducts } from "../features/product/productSlice";
import axios from 'axios';

const schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  tags: yup.string().required("Tag is Required"),
  color: yup.array().min(1, "Pick at least one color").required("Color is Required"),
  quantity: yup.number().required("Quantity is Required"),
  images: yup.array().required("Images are Required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [files, setFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

 

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, createdProduct } = newProduct;

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product Added Successfully!");
     
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, createdProduct, navigate]);

  const colorOptions = colorState.map((i) => ({
    label: i.title,
    value: i._id,
  }));

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: [],
      quantity: "",
      images: [],
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      if (files.length > 0) {
        const formData = new FormData();
        files.forEach((file) => formData.append('images', file));
    
        try {
          const response = await axios.post('https://ecommerce-website-3-tdt8.onrender.com/api/upload/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          dispatch(createProducts({ ...values, images: response.data }));
        } catch (error) {
          console.error('Error uploading images:', error);
          toast.error("Error uploading images. Please try again.");
          return;
        }
      } else {
        dispatch(createProducts(values));
      }
    
      formik.resetForm();
      setColor([]);
      setFiles([]);
      setUploadedImages([]);
    },
  });

  const handleColors = (e) => {
    setColor(e);
    formik.setFieldValue('color', e);
  };

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
          <CustomInput type="text" label="Enter Product Title" name="title" onChng={formik.handleChange("title")} onBlr={formik.handleBlur("title")} val={formik.values.title} />
          <div className="error">{formik.touched.title && formik.errors.title}</div>
          <div className="">
            <CustomInput type="text" label="Enter Product description" name="description" onChng={formik.handleChange("description")} onBlr={formik.handleBlur("description")} val={formik.values.description} />
          </div>
          <div className="error">{formik.touched.description && formik.errors.description}</div>
          <CustomInput type="number" label="Enter Product Price" name="price" onChng={formik.handleChange("price")} onBlr={formik.handleBlur("price")} val={formik.values.price} />
          <div className="error">{formik.touched.price && formik.errors.price}</div>
          <select name="brand" onChange={formik.handleChange("brand")} onBlur={formik.handleBlur("brand")} value={formik.values.brand} className="form-control py-3 mb-3">
            <option value="">Select Brand</option>
            {brandState.map((i, j) => (
              <option key={j} value={i.title}>{i.title}</option>
            ))}
          </select>
          <div className="error">{formik.touched.brand && formik.errors.brand}</div>
          <select name="category" onChange={formik.handleChange("category")} onBlur={formik.handleBlur("category")} value={formik.values.category} className="form-control py-3 mb-3">
            <option value="">Select Category</option>
            {catState.map((i, j) => (
              <option key={j} value={i.title}>{i.title}</option>
            ))}
          </select>
          <div className="error">{formik.touched.category && formik.errors.category}</div>
          <select name="tags" onChange={formik.handleChange("tags")} onBlur={formik.handleBlur("tags")} value={formik.values.tags} className="form-control py-3 mb-3">
            <option value="" disabled>Select Tag</option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
          </select>
          <div className="error">{formik.touched.tags && formik.errors.tags}</div>
          <Select mode="multiple" allowClear className="w-100" placeholder="Select colors" defaultValue={color} onChange={handleColors} options={colorOptions} />
          <div className="error">{formik.touched.color && formik.errors.color}</div>
          <CustomInput type="number" label="Enter Product Quantity" name="quantity" onChng={formik.handleChange("quantity")} onBlr={formik.handleBlur("quantity")} val={formik.values.quantity} />
          <div className="error">{formik.touched.quantity && formik.errors.quantity}</div>
          <div>
            <input type="file" multiple onChange={handleFileChange} />

            <div>
              {uploadedImages.map((image, index) => (
                <img key={index} src={image.url} alt={`Uploaded ${index}`} />
              ))}
            </div>
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
