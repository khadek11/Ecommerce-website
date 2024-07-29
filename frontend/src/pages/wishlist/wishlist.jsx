
import "../Home/Home.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";


import { useEffect } from "react";
import { getuserProductwishlist } from "../../features/user/userSlice";


const WishlistItems = () => {
  
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    getWishListFromDb();
  }, []);
  const getWishListFromDb = async () => {
    try {
      setIsLoading(true);
      await dispatch(getuserProductwishlist()).unwrap();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const wishListState = useSelector(state => state.auth.wishlist);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>
    return(
        <>
        <div className="space">
        <div className="grid productsRow grid2">
              <div className="gridInfo">
                <div className="info infooo">
                  <h3 className="hd">Users Wishlist</h3>
                  <p className="text-light">
                    Check all the items you have been interested with
                  </p>
                </div>
              </div>

              <div className="product-row productRow2">
                {
                    wishListState?.map((item, index) => {
                        return(
                            <div className="item2 productItem" key={index}>
                            <div className="imgwrapper">
                              <img src={item?.images[0].url}/>
        
                              <span className="badge badge-primary">28%</span>
                              <div className="actions">
                                <Button>
                                  <TfiFullscreen />
                                </Button>
                                <Button>
                                  <IoMdHeartEmpty style={{ fontSize: "20px" }} />
                                </Button>
                              </div>
                            </div>
                            <div className="infoo">
                              <h4>{item.title}</h4>
                              <h4>{item.decription}</h4>
                              <span className="text-success">{item.brand}</span>
                              <Rating
                                className="read-only"
                                name="read-only"
                                value={Number(item?.totalrating)}
                                readOnly
                                size="email"
                                precision={0.5}
                              />
        
                              <div className="flex">
                                <span className="oldPrice text-danger">$22.00</span>
                                <span className="netPrice text-danger">{item?.price}</span>
                              </div>
                            </div>
                          </div>
                        )
                    })
                }

      
                 
              </div>
            </div>
            </div>
        </>
    )
};



export default WishlistItems;