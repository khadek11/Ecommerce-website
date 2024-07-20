import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function HomeBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hd6/h55/33081764675614/watches_top-banner-web--new-home-page-main-2024-07-08.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hc2/h19/32973028196382/beauty_top-banner-web_480-xm.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h76/h00/33161069428766/fratini-lemmon%26pepper_top-banner-web_ej--s-193.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hfc/hc9/33109669249054/Private_top-banner-web--flat-503off-2024-07-11.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h8e/hb2/33109669904414/Main_EOSS-FLAT-50-WEB--2024-07--10-new-hp.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hf6/hf2/33142933127198/Highest-Deal-of-the-Week-web-Baggit-%2C-ED-%26-More_gh67.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hf2/h86/33118166515742/Highest-Deal-of-the-Week-web-Provogue%2C-FCUK_kw--%3D2.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>


        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/ha8/h8c/33120843071518/Highest-Deal-of-the-Week-web-Guess_je--e93.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h24/h97/33120843399198/Highest-Deal-of-the-Week-web-Tommy-Hilfiger_ek--e03.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h8a/h25/33120846512158/Highest-Deal-of-the-Week-web-Inc.5_du--9d3.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h62/h1e/33120846741534/Highest-Deal-of-the-Week-web-Reebok_k--e03.jpg"
            alt="banner"
            className="itemImg"
          />
        </div>
        
      </Slider>
    </div>
  );
}

export default HomeBanner;
