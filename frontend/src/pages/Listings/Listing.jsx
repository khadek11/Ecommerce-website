import Sidebar from "./Sidebar.jsx";
import React from "react";
import "./Listing.css";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsSixBold } from "react-icons/pi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Product from '../Home/Product.jsx';
import { useState } from "react";
import Pagination from "@mui/material/Pagination";

const Listing = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [productView, setProductView] = useState("four");
    const openDropDown = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const productStyle = () => {
        switch (productView) {
            case "one":
                return "full-width";
            case "two":
                return "half-width";
            case "three":
                return "third-width";
            case "four":
                return "quarter-width";
            default:
                return "quarter-width";
        }
    };

    return (
        <div className="product-listing-page">
            <div className="containerL">
                <div className="productListing">
                    <Sidebar />
                    <div className="content-right">
                        <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" className="width radius" alt="Banner" />
                        <div className="showBy">
                            <div className="flexbtn">
                                <Button className={productView === "one" && "act"} onClick={() => setProductView("one")}>
                                    <IoIosMenu className="svgbtn" />
                                </Button>
                                <Button className={productView === "two" && "act"} onClick={() => setProductView("two")}>
                                    <CgMenuGridR className="svgbtn" />
                                </Button>
                                <Button className={productView === "three" && "act"} onClick={() => setProductView("three")}>
                                    <TfiLayoutGrid4Alt className="svgbtn" />
                                </Button>
                                <Button className={productView === "four" && "act"} onClick={() => setProductView("four")}>
                                    <PiDotsSixBold className="svgbtn" />
                                </Button>
                            </div>
                            <div className="auto">
                                <Button onClick={handleClick}>
                                    Show 9<FaAngleDown />
                                </Button>
                                <Menu
                                    className="widthmenu"
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openDropDown}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>18</MenuItem>
                                    <MenuItem onClick={handleClose}>20</MenuItem>
                                    <MenuItem onClick={handleClose}>14</MenuItem>
                                    <MenuItem onClick={handleClose}>18</MenuItem>
                                    <MenuItem onClick={handleClose}>20</MenuItem>
                                    <MenuItem onClick={handleClose}>14</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className="productListingg">
                            <Product itemViewName={productStyle()} />
                            <Product itemViewName={productStyle()} />
                            <Product itemViewName={productStyle()} />
                            <Product itemViewName={productStyle()} />
                            <Product itemViewName={productStyle()} />
                            <Product itemViewName={productStyle()} />
                           
                        </div>
                        <div className="aalign">
                            <Pagination count={6} color="primary" size="large"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;
