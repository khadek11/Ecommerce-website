import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, className, value, onchange, onBlur } = props;
  return (
    <div className="">
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

    </div>
  );
};

export default CustomInput;
