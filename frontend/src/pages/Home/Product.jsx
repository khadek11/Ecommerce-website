import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import "./Home.css";
import { Rating } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import '../Listings/Listing.css'

const Product = (props) => {
    const context = useContext(MyContext)
     
      const viewProductsDetails = (id) => {
           context.setIsOpenProductModal(true);
      }
    return(
        <>
              <div className={`item2 productItem ${props.itemView}`}>
                    <div className="imgwrapper">
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
        </>
    )

}


Product.propTypes = {
  itemView: PropTypes.string.isRequired,
};

export default Product