import "./Home.css";
import HomeBanner from "./HomeBanner";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from '../../assets/images/banner2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import ProductItem from "./ProductItem";
import NewProducts from "./NewProducts";


function Home() {
 

  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="grid">
              <div className="banner1">
                <img src={Banner1} className="cursor" />
                
              </div>
              <div className="banner1">
                <img src={Banner2} className="cursor" />
                
              </div>
            </div>
            <div>
           <ProductItem />


           <NewProducts />
           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
