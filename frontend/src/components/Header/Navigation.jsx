import Button from "@mui/material/Button";
import "./Header.css";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

function Navigation() {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row2">
          <div className="navpart1">
            <div className="catWrapper">
              <Button
                className="allCatTab"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isOpenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>men <FaAngleRight className="rightAngle"/></Button>
                    </Link>
                    <div className="subMenu">
                      <Link to="/item:id">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>Watches</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>Watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>women <FaAngleRight className="rightAngle"/></Button>
                    </Link>
                    <div className="subMenu">
                      <Link to="/item:id">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>Watches</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/item:id">
                        <Button>Watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>Gift</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>men</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>women</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/item:id">
                      <Button>Gift</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navpart2">
            <ul className="list">
              <li className="list-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Men</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/item:id">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Women</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/item:id">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/item:id">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
                <li className="list-item"><Link to="/wishlist"><Button>Wishlist</Button></Link></li>
                <li className="list-item"><Link to="/product:id"><Button>Products</Button></Link></li>
                <li className="list-item"><Link to="/item:id"><Button>Prod Category</Button></Link></li>
             
             
             
             
              <li className="list-item">
                <Link to="/item:id">
                  <Button>Blog</Button>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
