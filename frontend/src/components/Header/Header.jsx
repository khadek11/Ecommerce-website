
import './Header.css'
import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import CountryDropDown from './CountryDropDown';
import {FiUser} from 'react-icons/fi';
import { IoBagOutline } from "react-icons/io5";
import SearchBar from "./SearchBox";
import Navigation from './Navigation';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { MyContext } from '../../App';


function Header() {

  const context = useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="bg-header">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Due to the current GenZ revolutionary movement orders may be processed with a slight delay</p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="loggoWrapper image-container">
                  <Link to={'/'}><img src={Logo} alt="Logo" className="logo-img" /></Link>
              </div>

              <div className="part2">
                {
                  context.countryList.length!==0 && <CountryDropDown />
                }
                
                <SearchBar />
              </div>
                <div className="part3">
                  <Button className="circle"><FiUser className="svg-user"/></Button>
                  <div className="cartTab">
                    <span className="price">$3.35</span>
                    <div className="position">
                    <button className="circle"><IoBagOutline className="svg-user"/></button>
                    <span className="count">1</span>
                    </div>
                    
                  </div>
                </div>
            </div>
          </div>
        </div>

     <Navigation />    
      </div>
    </>
  )
}

export default Header;
