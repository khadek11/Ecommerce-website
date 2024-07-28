import "./Home.css";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../features/products/productSlice';
import { useEffect } from "react";
import Product from "./producttrail";

const ProductItem = () => {
  const ProductState = useSelector((state) => state.product.product);
  console.log(ProductState);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };

  return (
    <>
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
            {ProductState && ProductState.length > 0 ? (
              ProductState.map((item, index) => {
                return (
                  <Product key={index} data={[item]} itemViewName="productItem" />
                );
              })
            ) : (
              <div>No products found</div>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductItem;