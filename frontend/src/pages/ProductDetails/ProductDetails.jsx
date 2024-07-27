import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { Rating } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import ProductItem from "../Home/ProductItem";



import "./ProductDetails.css"

import QuantityBox from "../Home/QuantityBox";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";

const ProductDetails = () => {
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };


  const [activeTabs, setActiveTabs] =useState(0)

  return (
    <>
      <div className="productDetail">
        <div className="centerDetail">
          <div className="columnnDetail">
       
            <Slider {...settings2}>
              <div className="imageWWrapperDetail">
                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62.jpg" />
              </div>
              <div className="imageWWrapperDetail">
                <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image3-35.jpg" />
              </div>
            </Slider>
          </div>
          <div className="columnn2Detail">
            <h4 className="modalDetailtext">
              All natural Italian-style chicken meatballs
            </h4>
            <div className="alignDetail">
              <div className="brandsDetail">
                <span>Brands</span>
                <span className="left">Welchs</span>
              </div>
              <Rating
                className="read-only"
                name="read-only"
                value={5}
                readOnly
                size="email"
                precision={0.5}
              />
            </div>
            <div className="alignDetail">
              <div className="oldPrice">$14.00</div>
              <div className="netPrice">$9.00</div>
            </div>

            <span className="text-success ">In stock</span>
            <p className="text-ipsumDetail">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque voluptate impedit asperiores nobis. Hic illum magni, vel voluptatibus quaerat vero. Consectetur eligendi soluta fuga numquam dicta, magni expedita esse.
            </p>

            <div className="sizeWeight"></div>

            <div className="carttt">
              <QuantityBox />

              <Button className="btn-bluee ">Add to Cart</Button>
              
           
           
            <div className="display">
            <Tooltip title="add to wishlist" placement="top">
              <Button className="btn-round" variant="outlined">
                <IoMdHeartEmpty />
              
              </Button>
              </Tooltip>
              <Tooltip title="add to compare" placement="top">
              <Button className="btn-round ml" variant="outlined">
                <MdCompareArrows />
                
              </Button>
              </Tooltip>
              </div>
              </div>
            
          </div>
        </div>
       
        <div className="description">
      <div className="customTabs">
        <ul className="listlist">
          <li className="listul">
            <button
              className={`tabButton ${activeTabs === 0 && 'activeDetail'}`}
              onClick={() => setActiveTabs(0)}
            >
              Description
            </button>
          </li>
          <li className="listul">
            <button
              className={`tabButton ${activeTabs === 1 && 'activeDetail'}`}
              onClick={() => setActiveTabs(1)}
            >
              Additional Info
            </button>
          </li>
          <li className="listul">
            <button
              className={`tabButton ${activeTabs === 2 && 'activeDetail'}`}
              onClick={() => setActiveTabs(2)}
            >
              Reviews
            </button>
          </li>
        </ul>
      </div>
      <div className="tabContent">
        {activeTabs === 0 && <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo necessitatibus, libero deserunt neque ipsa. Eos non quisquam quod illo dolorum saepe obcaecati, deleniti, sed autem optio perspiciatis beatae amet.
        Vitae delectus doloremque esse id placeat praesentium excepturi quas dignissimos dicta, recusandae sint voluptatum illum saepe animi rerum vero expedita asperiores, quia reiciendis unde consequuntur quod doloribus illo. Saepe, officiis.
        Sunt nemo culpa earum distinctio veritatis provident necessitatibus nesciunt! Quo sunt vitae nulla debitis voluptatem ipsam eius, ea quia quaerat eaque exercitationem amet quasi eligendi illo sequi tempore asperiores aspernatur!
        Quibusdam dolorum cumque reiciendis soluta magnam earum autem velit deleniti cum, inventore sunt ducimus, repellendus porro. Consequuntur officiis, aliquid quidem maiores quasi dicta dolor autem magnam rem ratione quaerat omnis.
        Numquam hic itaque voluptate quo voluptatibus dolorem aliquam modi adipisci quaerat. Quisquam delectus odit accusantium mollitia expedita quaerat officiis eum, sed eius corrupti temporibus aliquid, neque quam assumenda voluptatum quae..</div>}
        {activeTabs === 1 && <div> 
            <table className="custom-table">
        <tbody>
            <tr>
                <td className="table-cell">
                    <label htmlFor="name">Brand</label>
                </td>
                <td className="table-cell">
                    <label htmlFor="email">Welchis</label>
                </td>
            </tr>
        </tbody>
    </table>
            </div>}
      
        {activeTabs === 2 && <div>Reviews content goes here.</div>}
      </div>
    </div>

   <ProductItem />
      </div>
    </>
  );
};

export default ProductDetails;
