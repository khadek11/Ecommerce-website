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

const Product = ({ data, itemViewName }) => {
  const context = useContext(MyContext);

  const viewProductsDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      {Array.isArray(data) ? (
        data.map((item, index) => {
          return (
            <Link to="/" key={index}>
              <div className={`item2 productIItem ${props.itemViewName}`}>
                <div className="imggwwrapper">
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" />
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
                  <h4>Werthers Original Caramel Hard</h4>
                  <span className="text-success">In stock</span>
                  <Rating
                    className="read-only"
                    name="read-only"
                    value={1}
                    readOnly
                    size="email"
                    precision={0.5}
                  />
                  <div className="flex">
                    <span className="oldPrice text-danger">$20.00</span>
                    <span className="netPrice text-danger">$14.00</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
           
      <div> No products found</div>
      )}
    </>
  );
};

Product.propTypes = {
  itemViewName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Product;
