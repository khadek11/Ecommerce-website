import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import "../Listings/Listing.css";
import "./Home.css";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const context = useContext(MyContext);

  const viewProductsDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <Link to="/">
        <div className={`item2 productIItem`}>
          <div className="imggwwrapper">
            <img src={data?.images[0].url} className="imageupload" />
            <span className="badge badge-primary">28%</span>
            <div className="actions">
              <Button onClick={() => viewProductsDetails(1)}>
                <TfiFullscreen />
              </Button>
              <Button>
                <IoMdHeartEmpty style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </div>
          <div className="infoo">
            <h4>{data.title}</h4>
            <h4>{data.description}</h4>
            <span className="text-success">{data.brand}</span>
            <Rating
              className="read-only"
              name="read-only"
              value={Number(data?.totalrating)}
              readOnly
              size="medium" // Corrected the size value
              precision={0.5}
            />
            <div className="flex">
              <span className="oldPrice text-danger">$20.00</span>
              <span className="netPrice text-danger">{data?.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Product;
