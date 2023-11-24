import React from "react";
import style from "./Services.module.css";


function Services() {
  return (
    <div id="services" className={style.ServicesContainer}>
      <h1>Our Services</h1>

      <div className={style.gridContainer}>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://www.salonng.com/wp-content/uploads/2020/12/iStock-1179764380.jpg"
            />
          </i>
          <span>Haircut & Styling</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPB2IsHvpNLjH0YrWYDoBMKTwDU8_F1I2vDAk4sNOekwGfOokNO2okbAPfVa14rQWh9U&usqp=CAU"
            />
          </i>
          <span>Makeup</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="data:image/jpeg;base64,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"
            />
          </i>
          <span>Manicure & Pedicure</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://w7.pngwing.com/pngs/34/19/png-transparent-skin-care-facial-care-man-face-man-cream-people-boy.png"
            />
          </i>
          <span>SkinCare</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdk7yNn0NE8MOa7uOFxpS1ouPINqC6fI6MeXVlov6peFRf-XLiwIqc6R3mQGb-Pox5Fe0&usqp=CAU"
            />
          </i>
          <span>Body Treatments</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbA3e4bNi3AuzRlggAULn-h6-Dy-yMvZMqg&usqp=CAU"
            />
          </i>
          <span>Massage</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
