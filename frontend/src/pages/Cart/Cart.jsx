import "./Cart.css";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import QuantityBox from '../Home/QuantityBox'
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <>
      <section className="cartSection">
        <div className="containerCart">
          <h2 className="hdCart">Your Cart</h2>
          <p className="pcart">
            There are <b>3</b> Products in your cart
          </p>
          <div className="rowCart">
            <div className="colCart1">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{width: "45%"}}>Product</th>
                      <th style={{width: "15%"}}>UnitPrice</th>
                      <th style={{width: "25%"}}>Quantity</th>
                      <th style={{width: "15%"}}>Subtotal</th>
                      <th style={{width: "10%"}}>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td style={{width: "45%"}}>
                        <Link to="/product/1/">
                          <div className="flexCart">
                            <div className="imgWrapperCart">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                className="fullCart"
                              />
                            </div>

                            <div className="infoCart">
                              <h6>Field Roast Chao Cheese Original</h6>
                              <Rating
                                className="read-only"
                                name="read-only"
                                value={4.5}
                                readOnly
                                size="email"
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "25%"}}>
                        <QuantityBox />
                         </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "10%"}}><span className="remove"><IoIosClose className="svgCart"/></span></td>
                      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td style={{width: "45%"}}>
                        <Link to="/product/1/">
                          <div className="flexCart">
                            <div className="imgWrapperCart">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                className="fullCart"
                              />
                            </div>

                            <div className="infoCart">
                              <h6>Field Roast Chao Cheese Original</h6>
                              <Rating
                                className="read-only"
                                name="read-only"
                                value={4.5}
                                readOnly
                                size="email"
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "25%"}}>
                        <QuantityBox />
                         </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "10%"}}><span className="remove"><IoIosClose className="svgCart"/></span></td>
                      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td style={{width: "45%"}}>
                        <Link to="/product/1/">
                          <div className="flexCart">
                            <div className="imgWrapperCart">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                className="fullCart"
                              />
                            </div>

                            <div className="infoCart">
                              <h6>Field Roast Chao Cheese Original</h6>
                              <Rating
                                className="read-only"
                                name="read-only"
                                value={4.5}
                                readOnly
                                size="email"
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "25%"}}>
                        <QuantityBox />
                         </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "10%"}}><span className="remove"><IoIosClose className="svgCart"/></span></td>
                      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td style={{width: "45%"}}>
                        <Link to="/product/1/">
                          <div className="flexCart">
                            <div className="imgWrapperCart">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                className="fullCart"
                              />
                            </div>

                            <div className="infoCart">
                              <h6>Field Roast Chao Cheese Original</h6>
                              <Rating
                                className="read-only"
                                name="read-only"
                                value={4.5}
                                readOnly
                                size="email"
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "25%"}}>
                        <QuantityBox />
                         </td>
                      <td style={{width: "15%"}}>$7.25</td>
                      <td style={{width: "10%"}}><span className="remove"><IoIosClose className="svgCart"/></span></td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="colCart2">
                <div className="cardCart">
                    <h4>Cart Totals</h4>
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="text-redd"><b>$12.31</b></span>
                    </div>
                    <div className="subtotal">
                        <span>Shipping</span>
                        <span className="textFree"><b>Free</b></span>
                    </div>
                    <div className="subtotal">
                        <span>Estimate For</span>
                        <span  className="textFree"><b>Kenya</b></span>
                    </div>
                    <div className="subtotal">
                        <span>Total</span>
                        <span className="text-redd"><b>$45.30</b></span>
                    </div>
                        <br />
                    <Button className="btn-bluee btnCart">Add to Cart</Button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
