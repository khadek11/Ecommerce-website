import { Button } from "@mui/material";
import { FaMinus } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import './Home.css';
import { useState } from "react";

const QuantityBox = () => {
  const [inputVal, setInputVal] = useState(1);

  const minus = () => {
    if (inputVal > 0) {
      setInputVal(inputVal - 1);
    }
  };

  const plus = () => {
    setInputVal(inputVal + 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setInputVal(value);
    }
  };

  return (
    <div className="quantity">
      <Button onClick={minus}><FaMinus /></Button>
      <input 
        type="text" 
        value={inputVal} 
        onChange={handleChange}
      />
      <Button onClick={plus}><FaPlus /></Button>
    </div>
  );
};

export default QuantityBox;
