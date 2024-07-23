import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import { Rating } from "@mui/material";
import "./Home.css";
import './QuantityBox'
import QuantityBox from "./QuantityBox";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../App";

const ProductModal = () => {

  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
    
  };
  const context =useContext(MyContext)
  return (
    <>
      <Dialog
        open={true}
        className="productModal"
        onClose={() => {context.setIsOpenProductModal(false)}}
      >
        <Button className="closeee" onClick={() => {context.setIsOpenProductModal(false)}}>
          <MdClose />
        </Button>
        <h4 className="modal">All natural Italian-style chicken meatballs</h4>
        <div className="align">
          <div className="brands">
            <span>Brands</span>
            <span className="left">Welchs</span>
          </div>
          <Rating
            className="read-only"
            name="read-only"
            value={1}
            readOnly
            size="email"
            precision={0.5}
          />
        </div>
        
        <div className="center">
            <div className="columnn1">
             <span className="badge badge-primary badgeModal">23%</span>
              <Slider {...settings2}>
                <div className="imageWWrapper">
                   <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62.jpg" />
                </div>
                <div className="imageWWrapper">
                   <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image3-35.jpg" />
                </div>
             
              </Slider>
            </div>
            <div className="columnn2">
              <div className="align">
                <div className="oldPrice">$14.00</div>
                <div className="netPrice">$9.00</div>
              </div>

              
              <span className="text-success ">In stock</span>
              <p className="text-ipsum">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
              
            <div className="carttt">
              <QuantityBox />

              <Button className="btn-bluee">Add to Cart</Button>
            </div>

            <div className="display">
              <Button className="btn-round" variant="outlined"><IoMdHeartEmpty />&nbsp; Add to wish List</Button>
              <Button className="btn-round ml" variant="outlined"><MdCompareArrows />&nbsp; Compare</Button>
            </div>



            </div>


        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
