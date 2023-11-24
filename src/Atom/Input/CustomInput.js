import React from "react";

function CustomInput(props) {
  return (
    <div>
      <input
        onChange={props.onChange}
        className={props.className}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        required={props.required}
      />
    </div>
  );
}

export default CustomInput;
