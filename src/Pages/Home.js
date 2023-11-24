
import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Pricing from "../Components/Pricing/Pricing";
import Team from "../Components/Team/Team";
import Services from "../Components/Services/Services";
import CustomFooter from "../Components/Footer/Footer"
import style from "./home.module.css";

function Home() {


  return (
    <div className={style.container}>
      <div className={style.Navbar}>
 
        <Navbar />
      </div>
      <div className={style.Home}>
        <Hero />
      </div>
      <div className={style.Home}>
        <AboutUs />
      </div>
      <div>
    
        <Services />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
    
        <ContactUs />
      </div>
      <div>
    <CustomFooter />
  </div>
    </div>
  );
}

export default Home;
