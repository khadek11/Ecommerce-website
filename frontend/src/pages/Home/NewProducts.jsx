import "./Home.css";
import Button from "@mui/material/Button";

import { IoIosArrowRoundForward } from "react-icons/io";
import "./Home.css";
import { Rating } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";

const NewProducts = () => {
    
    return(
        <>
        <div className="grid productsRow grid2">
              <div className="gridInfo">
                <div className="info infooo">
                  <h3 className="hd">NEW PRODUCTS</h3>
                  <p className="text-light">
                    View our new Products and the updated stock
                  </p>
                </div>
                <Button className="viewAllBtn">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product-row productRow2">
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" />

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

                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721569165/1721569164353_test.png" />

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
                      <h4>Vivo T2x5G (Glimmer Black 12,)</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={5}
                        readOnly
                        size="email"
                        precision={0.5}
                      />

                      <div className="flex">
                        <span className="oldPrice text-danger">$22.00</span>
                        <span className="netPrice text-danger">$16.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721279418/1721279417849_sony-alpha-ilce-6100y-24-2-mp-mirrorless-digital-slr-camera-with-16-50-mm-and-55-210mm-power-zoom-lens-aps-c-sensor-fast-auto-focus-real-time-eye-af-real-time-tracking-4k-vlogging-camera-tiltable-screen-d_1.webp" />

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
                      <h4>Sony Alpha ILCE Glimmer Black,12...</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={4}
                        readOnly
                        size="email"
                        precision={0.5}
                      />

                      <div className="flex">
                        <span className="oldPrice text-danger">$25.00</span>
                        <span className="netPrice text-danger">$18.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721279291/1721279290434_lg-80-cm-32-inch-hd-ready-led-smart-tv-32lm560-digital-o491898016-p590039885-1-202009260709.webp" />
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
                      <h4>LG smart tv(32INCH) digital smart tv</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={3}
                        readOnly
                        size="email"
                        precision={0.5}
                      />

                      <div className="flex">
                        <span className="oldPrice text-danger">$23.00</span>
                        <span className="netPrice text-danger">$17.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1721279140/1721279140081_samsung-galaxy-f-series-f23-5g-128-gb-4-gb-ram-copper-blush-mobile-phone-digital-o493666095-p600340990-0-202304101447.webp" />
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
                      <h4>Samsung Galaxy series mobile phone</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={4}
                        readOnly
                        size="email"
                        precision={0.5}
                      />

                      <div className="flex">
                        <span className="oldPrice text-danger">$28.00</span>
                        <span className="netPrice text-danger">$24.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720602808/1720602807718_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp" />
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
                      <h4>Fortune sunlite refined sunflower oil</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={3}
                        readOnly
                        size="email"
                        precision={0.5}
                      />
                      <div className="flex">
                        <span className="oldPrice text-danger">$30.00</span>
                        <span className="netPrice text-danger">$27.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720602808/1720602807718_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp" />
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
                      <h4>Fortune sunlite refined sunflower oil</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={3}
                        readOnly
                        size="email"
                        precision={0.5}
                      />
                      <div className="flex">
                        <span className="oldPrice text-danger">$30.00</span>
                        <span className="netPrice text-danger">$27.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720602808/1720602807718_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp" />
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
                      <h4>Fortune sunlite refined sunflower oil</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={3}
                        readOnly
                        size="email"
                        precision={0.5}
                      />
                      <div className="flex">
                        <span className="oldPrice text-danger">$30.00</span>
                        <span className="netPrice text-danger">$27.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720602808/1720602807718_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp" />
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
                      <h4>Fortune sunlite refined sunflower oil</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={3}
                        readOnly
                        size="email"
                        precision={0.5}
                      />
                      <div className="flex">
                        <span className="oldPrice text-danger">$30.00</span>
                        <span className="netPrice text-danger">$27.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src="https://res.cloudinary.com/dvyozjjma/image/upload/v1720602808/1720602807718_fortune-sunlite-refined-sunflower-oil-1-l-product-images-o490000052-p490000052-0-202203150155.webp" />
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
                      <h4>Fortune sunlite refined sunflower oil</h4>
                      <span className="text-success">In stock</span>
                      <Rating
                        className="read-only"
                        name="read-only"
                        value={3}
                        readOnly
                        size="email"
                        precision={0.5}
                      />
                      <div className="flex">
                        <span className="oldPrice text-danger">$30.00</span>
                        <span className="netPrice text-danger">$27.00</span>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
        </>
    )
};
export default NewProducts