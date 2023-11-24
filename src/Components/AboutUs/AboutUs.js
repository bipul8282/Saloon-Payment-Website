import React from "react";
import style from "./AboutUs.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import CustomButton from "../../Atom/Button/CustomButton";

function AboutUs() {
  return (
    <div id='whyus' className={style.AboutWrapper}>
      <div className={style.AboutContainer}>
        <div className={style.AboutContent}>
          <h2>Why Our Clients Choose Us</h2>
          <p>
            We are the leading beauty salon in Providing high-quality
            hairdressing, makeup and skin care services to everyone
          </p>
          <ul>
            <li>
              <ArrowRightOutlined />
              <span>Extensions, Smoothing Services & Treatments</span>
            </li>
            <li>
          
              <ArrowRightOutlined /> <span>
                Complete Skin & Hair Solution
              </span>
            </li>
            <li>
          
              <ArrowRightOutlined /> <span> Makeup</span>
            </li>
            <li>
              <ArrowRightOutlined />
              <span>Modern salon & Welcoming Energy</span>
            </li>
          </ul>
          <div className={style.Aboutbtn}>
          <CustomButton ButtonText="Read More" className={style.AboutButton} />
          </div>
        </div>
        <div className={style.Aboutimg}>
          <img
            src="https://content.jdmagicbox.com/comp/bangalore/z1/080pxx80.xx80.171120174047.t2z1/catalogue/new-royal-mens-saloon-rt-nagar-bangalore-massage-centres-for-men-yrep9.jpg"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
