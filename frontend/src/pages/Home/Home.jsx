import "./Home.css";
import HomeBanner from "./HomeBanner";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import ProductItem from "./ProductItem";
import NewProducts from "./NewProducts";
import HomeCat from "./HomeCat";
import Banner3 from '../../assets/images/banner3.jpg'
import Banner4 from '../../assets/images/banner4.jpg'
import coupon from '../../assets/images/coupon.png'
import { IoMailOutline} from 'react-icons/io5'
import Button from "@mui/material/Button";


function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="grid stickyyy">
              <div className="banner1">
                <img src={Banner1} className="cursor" />
              </div>
              <div className="banner1">
                <img src={Banner2} className="cursor" />
              </div>
              <div className="banner1">
                <img src={Banner2} className="cursor" />
              </div>
              <div className="banner1">
                <img src={Banner2} className="cursor" />
              </div>
            </div>
            <div>
              <ProductItem />
              
              <NewProducts />
              <div className="flexx">
              <img src={Banner3}  className="banners"/>
              <img src={Banner4} className="banners"/>
             
             </div>
             
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection">
        <div className="containerrr">
          <div className="roww">
            <div className="col">
              <p className="text-white textdis">$20 discount for your first order</p>
              <h4 className="text-white texthead">Join our newsletter and get...</h4>
            <p className="text-white text-light"> 
            Join our email subscription now to get updates on <br />
            promotions and coupons.
            </p><br />
   

            <form>
              <IoMailOutline />
              <input type="text">
              </input>
              <Button>Subscribe</Button>
            </form>


              </div>
            <div className="col">
              <img src={coupon} className="coupon"/>
            </div>
          </div>
        </div>

      
      </section>

      
    </>
  );
}

export default Home;
