import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname } = props;
  return (
    <>
      <div className={classname}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={"form-control"}
        />
      </div>
    </>
  );
};

export default CustomInput;
