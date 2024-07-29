import React, { useEffect } from 'react';
import Product from './Product';
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, selectAllProducts } from '../../features/products/productSlice';

const ProductItem = () => {
  const productState = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };

  return (
    <div className="grid productsRow">
      <div className="gridInfo">
        <div className="info">
          <h3 className="hd">BEST SELLERS</h3>
          <p className="text-light">
            Do not miss the country affairs until the end of the August
          </p>
        </div>
        <Button className="viewAllBtn">
          View All
          <IoIosArrowRoundForward />
        </Button>
      </div>

      <div className="product-row">
        <Slider {...productSliderOptions}>
          {Array.isArray(productState) &&
            productState.map((product, index) => (
              <Product key={index} data={product} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductItem;
