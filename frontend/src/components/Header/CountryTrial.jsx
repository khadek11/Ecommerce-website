import { useState, forwardRef } from 'react';
import { Button, Dialog, Slide } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import './Header.css';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDropDown() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button className="countryDrop" onClick={handleOpen}>
        <div className="info">
          <span className="label">YOUR LOCATION</span>
          <span className="name">Kenya</span>
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
          <input type="text" placeholder="Search your area" />
          <button>
            <IoSearch className="svg" />
          </button>
        </div>

        <ul className="countryList">
          {[
            'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 
            'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of the Congo', 
            'Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 
            'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 
            'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 
            'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 
            'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 
            'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 
            'Zambia', 'Zimbabwe'
          ].map((country, index) => (
            <li key={index} onClick={handleClose}>
              <Button>{country}</Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDropDown;
