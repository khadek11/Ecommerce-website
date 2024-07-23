import './Listing.css'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import checkbox from '@mui/material/Checkbox'
import Checkbox from '@mui/material/Checkbox'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import { useState } from 'react'
import {Link} from "react-router-dom"


const Sidebar = () => {
    const [value, setValue] = useState([100, 60000])
    const [value2, setValue2] = useState(0);
    return(
        <>
        <div className="sidebarr">
        <div className="filterBox">
           <h5>PRODUCT CATEGORIES</h5>
            <div className="scroll">
            <ul>
                <li><FormControlLabel control={<Checkbox  />} label="Men" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Women" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Beauty" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Kids" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Men" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Women" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Beauty" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Kids" /></li>
                
               
            </ul>
            </div>
        </div>
        <div className="filterBox">

        <h5>FILTER BY PRICE</h5>

        <RangeSlider value={value} onInput={setValue} min={100} max={6000} className="RangerSlide"/>
        <div className="priceRanger">
            <span>From:<strong className='textdark'>RS: {value[0]}</strong></span>
            <span>From:<strong>RS: {value[1]}</strong></span>
        </div>

        </div>
        
        <div className="filterBox">
           <h5>PRODUCT STATUS</h5>
            <div className="scroll">
            <ul>
                <li><FormControlLabel control={<Checkbox  />} label="In Stock" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="On Sale" /></li>
              
            </ul>
            </div>
        </div>
        <div className="filterBox">
           <h5>BRANDS</h5>
            <div className="scroll">
            <ul>
                <li><FormControlLabel control={<Checkbox  />} label="Frito Lay" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Nespresso" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Frito Lay" /></li>
                <li><FormControlLabel control={<Checkbox  />} label="Nespresso" /></li>
            
               
            </ul>
            </div>
        </div>

        <br />
        <Link to="#"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className='width'/></Link>
        </div>
        </>
    )
}
export default Sidebar