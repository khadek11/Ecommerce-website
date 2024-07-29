// src/components/Addproduct.js

import { useEffect, useState } from "react";
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
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { createProduct } from "../features/addsProduct/addproductSlice"

let schema = yup.object().shape({
  name: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  brand: yup.string().required("Brand is Required"),
  category: yup.string().required("Category is Required"),
  countInStock: yup.number().required("Quantity is Required"),
  images: yup.array().of(
    yup.object().shape({
      public_id: yup.string().required(),
      url: yup.string().required(),
    })
  ),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.addProduct);
  const { isSuccess, isError, isLoading, product } = newProduct;

  useEffect(() => {
    if (isSuccess && product) {
      toast.success("Product Added Successfully!");
      navigate("/products"); // Redirect to products page after success
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, navigate]);

  const coloropt = colorState.map((i) => ({
    label: i.title,
    value: i._id,
  }));

  useEffect(() => {
    if (imgState.length > 0) {
      const formattedImages = imgState.map((img) => ({
        public_id: img.public_id,
        url: img.url,
      }));
      formik.setFieldValue('images', formattedImages);
    }
  }, [imgState]);

  const handleDrop = async (acceptedFiles) => {
    try {
      const uploadResponse = await dispatch(uploadImg(acceptedFiles));
      if (uploadResponse && uploadResponse.payload && Array.isArray(uploadResponse.payload)) {
        setSelectedFiles(acceptedFiles);
        const images = uploadResponse.payload.map((img) => ({
          public_id: img.public_id,
          url: img.url,
        }));
        formik.setFieldValue("images", images);
      } else {
        console.error("Upload response is not valid:", uploadResponse);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      countInStock: "",
      images: [],
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch(createProduct(values));
      formik.resetForm();
      setColor(null);
      setSelectedFiles([]);
    },
  });

 /*  const handleColors = (e) => {
    setColor(e);
    formik.setFieldValue('color', e);
  }; */

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <div className="">
            <CustomInput
              type="text"
              label="Enter Product description"
              name="description"
              onChng={formik.handleChange("description")}
              onBlr={formik.handleBlur("description")}
              val={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Price"
            name="price"
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <select
            name="brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Category</option>
            {catState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Quantity"
            name="quantity"
            onChng={formik.handleChange("quantity")}
            onBlr={formik.handleBlur("quantity")}
            val={formik.values.quantity}
          />
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the file here ...</p>
                  ) : (
                    <p>Drag and drop or click to select a file</p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {selectedFiles.map((file, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected File"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'eact-redux';
import { uploadImg, delImg } from '../features/upload/uploadSlice';
import { createProducts, resetState } from '../features/product/productSlice';

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      brand: '',
      category: '',
      tags: '',
      color: '',
      quantity: '',
      images: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  const handleDrop = async (acceptedFiles) => {
    try {
      const uploadResponse = await dispatch(uploadImg(acceptedFiles));
      if (uploadResponse && uploadResponse.data) {
        const images = uploadResponse.data.map((img) => img.url);
        formik.setValues({...formik.values, images });
      } else {
        console.error("Upload response is not valid:", uploadResponse);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleColors = (e) => {
    setColor(e);
  };

  return (
    <div>
      {/*... */}
      <div className="showimages d-flex flex-wrap gap-3">
        {imgState?.map((i, j) => (
          <div key={j} className="position-relative">
            <button
              type="button"
              onClick={() => dispatch(delImg(i.public_id))}
              className="btn-close position-absolute"
              style={{ top: "10px", right: "10px" }}
            ></button>
            <img src={i.url} alt="" width={200} height={200} />
          </div>
        ))}
      </div>
      {/*... */}
    </div>
  );
};
