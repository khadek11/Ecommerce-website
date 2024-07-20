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
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>Watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>Watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>women <FaAngleRight className="rightAngle"/></Button>
                    </Link>
                    <div className="subMenu">
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>Watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>clothing</Button>
                      </Link>
                      <Link to="/">
                        <Button>footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>Watches</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Gift</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>men</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>women</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>beauty</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>kids</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
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
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Women</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Beauty</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Watches</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Kids</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Gift</Button>
                </Link>
                <div className="subMenu shadow">
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/">
                  <Button>Contact</Button>
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
