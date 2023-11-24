import React from "react";
import style from "./Pricing.module.css";
import { useNavigate } from "react-router-dom";
import {PricingList} from '../../ConstData/ProductData'
function Pricing() {
  
  
  let navigate = useNavigate()
  return (
    <div id='pricing' className={style.PricingContainer}>
      <h1>Our Pricing</h1>

      <div  className={style.gridContainer}>
        {PricingList?.map((x) => {
          return (
            <div
            onClick={()=>navigate(`/Servicepage/${x.id}`)}
              key={x.id}
              id={style.itemOne}
              className={style.gridItem}
              style={{
                background: `linear-gradient(to right,
            rgb(0 0 0 / 0.5),
            rgb(0 0 0 / 0)),url(${x.img})`,
              }}
            >
              <div  className={style.massage}>
                <h1>{x.name}</h1>
                <p>{x.minutes}</p>
              </div>
              <p className={style.money}>₹{x.rupe}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
