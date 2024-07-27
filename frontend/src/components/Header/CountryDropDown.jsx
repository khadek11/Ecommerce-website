import { useState, forwardRef, useContext, useEffect } from "react";
import { Button, Dialog, Slide } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import "./Header.css";
import { MyContext } from "../../App";



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDropDown() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([])
  
  const context = useContext(MyContext)

  const selectCountry = (index, country) => {
    setSelectedTab(index)
    setIsOpenModal(false)
    context.setSelectedCountry(country)
  }

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, [context.countryList])

  
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if(keyword!==""){
      const List = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(List);
    }else{
      setCountryList(context.countryList);
    }
  
  };

  return (
    <>
      <Button className="countryDrop" onClick={handleOpen}>
        <div className="info">
          <span className="label">YOUR LOCATION</span>
          <span className="name">{context.selectedCountry!=="" ? context.selectedCountry?.length>10 ? context.selectedCountry?.substr(0, 10) : context.selectedCountry : "Select Location"}</span>
        </div>
        <span>
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        className="locationModal"
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <h5 className="locationHeader">Choose Your Delivery Location</h5>
        <p className="locationtext">
          Enter Your Address and we will specify the offer for your area
        </p>
        <Button className="close-location" onClick={handleClose}>
          <MdClose />
        </Button>
        <div className="headerSearch">
          <input type="text" placeholder="Search your area..."  onChange={filterList}/>
          <button>
            <IoSearch className="svg" />
          </button>
        </div>

        <ul className="countryList">
          {countryList?.length!==0 &&
            countryList?.map((item, index) => {
              return (
               <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                className={`${selectedTab===index ? 'active' : ''} `}
               >{item.country}</Button></li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDropDown;
