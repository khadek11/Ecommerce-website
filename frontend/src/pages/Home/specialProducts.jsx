import React, { useEffect, useMemo } from 'react';
import SpecialProduct from './specialProduct';  // Make sure this import matches your file name
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, selectAllProducts } from '../../features/products/productSlice';

const Special = () => {
  const productState = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const specialProducts = useMemo(() => {
    return Array.isArray(productState) 
      ? productState.filter(product => product.tags === "special")
      : [];
  }, [productState]);

  const productSliderOptions = {
    dots: false,
    infinite: specialProducts.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="grid productsRow">
      <div className="gridInfo">
        <div className="info">
          <h3 className="hd">SPECIAL PRODUCTS</h3>
          <p className="text-light">
            Do not miss the most popular products
          </p>
        </div>
        <Button className="viewAllBtn">
          View All
          <IoIosArrowRoundForward />
        </Button>
      </div>

      <div className="product-row">
        {specialProducts.length > 0 ? (
          <Slider {...productSliderOptions}>
            {specialProducts.map((product, index) => (
              <SpecialProduct key={index} data={product} />
            ))}
          </Slider>
        ) : (
          <p>No special products available.</p>
        )}
      </div>
    </div>
  );
};

export default Special;