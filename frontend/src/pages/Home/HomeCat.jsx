import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css";

const HomeCat = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
  
  };

  return (
    <div className="homeCat">
      <h2 className="features">FEATURES CATEGORIES</h2>
      <div className="containerr">
        <Slider {...settings}>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620777/1721620776746_fash.png" alt="Image 1" />
            </div>
            <h3>Fashion</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620801/1721620800724_ele.png" alt="Image 2" />
            </div>
            <h3>Electronics</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620825/1721620824813_gr.png" alt="Image 3" />
            </div>
            <h3>Groceries</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620864/1721620864566_well.png" alt="Image 4" />
            </div>
            <h3>Wellness</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620884/1721620884125_kit.png" alt="Image 5" />
            </div>
            <h3>Kitchen</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620777/1721620776746_fash.png" alt="Image 6" />
            </div>
            <h3>Fashion</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620903/1721620902944_bea.png" alt="Image 7" />
            </div>
            <h3>Beauty</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620931/1721620931192_foot.png" alt="Image 8" />
            </div>
            <h3>Footware</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620777/1721620776746_fash.png" alt="Image 7" />
            </div>
            <h3>Fashion</h3>
          </div>
          <div className="productitemm">
            <div className="imgWrapperr">
              <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721620777/1721620776746_fash.png" alt="Image 8" />
            </div>
            <h3>Fashion</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeCat;
