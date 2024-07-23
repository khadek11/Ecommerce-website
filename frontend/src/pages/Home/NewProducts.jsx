import "./Home.css";
import Button from "@mui/material/Button";

import { IoIosArrowRoundForward } from "react-icons/io";
import "./Home.css";
import { Rating } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import trimmer1 from '../../assets/products/trimmers/trimmer1.webp'
import refrigerator2 from "../../assets/products/refrigerator/refrigerator2.webp"
import watch1 from '../../assets/products/watches/watch3.webp'
import watch2 from '../../assets/products/watches/watch4.webp'
import watch3 from '../../assets/products/watches/watch1.webp'
import watch4 from '../../assets/products/watches/watch2.webp'
import tv4 from '../../assets/products/TV/tv4.webp'
import tv3 from '../../assets/products/TV/tv3.webp'
import earphone1 from '../../assets/products/earphones/earphone1.webp'
import earphone2 from '../../assets/products/earphones/earphone2.webp'
import { useContext } from "react";
import { MyContext } from "../../App";


const NewProducts = () => {
  const context = useContext(MyContext)
     
      const viewProductsDetails = (id) => {
           context.setIsOpenProductModal(true);
      }
    
    return(
        <>
        <div className="space">
        <div className="grid productsRow grid2">
              <div className="gridInfo">
                <div className="info infooo">
                  <h3 className="hd">NEW PRODUCTS</h3>
                  <p className="text-light">
                    View our new Products and the updated stock
                  </p>
                </div>
                <Button className="viewAllBtn" >
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product-row productRow2">
                  <div className="item2 productItem">
                    <div className="imgwrapper">
                      <img src={watch4} />

                      <span className="badge badge-primary">28%</span>
                      <div className="actions">
                        <Button>
                          <TfiFullscreen onClick={() => viewProductsDetails(1)}/>
                        </Button>
                        <Button>
                          <IoMdHeartEmpty style={{ fontSize: "20px" }} />
                        </Button>
                      </div>
                    </div>
                    <div className="infoo">
                      <h4>Godrej 215 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer</h4>
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
                      <img src={trimmer1} />

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
                      <img src={refrigerator2} />

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
                      <h4>LG 260 L Frost Free Double Door 2 Star Refrigerator (Ebony Regal, GL-N292RERY)4.webp</h4>
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
                      <img src={earphone2} />
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
                      <img src={watch1} />
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
                      <img src={earphone1}/>
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
                      <img src={tv3} />
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
                      <h4>PHILIPS MG3710-65 Trimmer 60 min Runtime 8 Length Settings (Black)4.webp</h4>
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
                      <img src={watch3} />
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
                      <h4>PHILIPS MG3710-65 Trimmer 60 min Runtime 8 Length Settings (Black)4.webp</h4>
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
                      <img src={watch2} />
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
                      <h4>Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black)1.webpl</h4>
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
                      <img src={tv4} />
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
                      <h4>Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black)1.webp</h4>
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
            </div>
        </>
    )
};
export default NewProducts