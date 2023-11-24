import React from "react";

function CustomButton(props) {
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>{ props.ButtonText}</button>
    </div>
  );
}

export default CustomButton;
