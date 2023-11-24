import React, { useState } from "react";
import style from "./Navbar.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { IsLogin } from "../../Recoil/Atom";
import { animateScroll as scroll } from "react-scroll";
import {  useNavigate } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  let [isUserLoggedIn, setIsUserLoggedIn] = useRecoilState(IsLogin);
  

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  function handleLogout() {
    localStorage.removeItem("currentuser");
    setIsUserLoggedIn(false);
  }
   let navigate = useNavigate()
  return (
    <header className={style.Navbar}>
      <div className={style.container}>
        <img
          className={style.logoImage}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROAdVl0rcsPiW1U3fQS5DDmYUlfJLwcGF7A&usqp=CAU"
          alt="Beauty Parlour"
        
          onClick={()=> navigate('/')}
        />
        <nav
          className={
            toggle
              ? `${style.menuItem} ${style.toggleNavbar}`
              : `${style.menuItem}`
          }
        >
          <div className={style.login}>
            <a
              href="/#home"
              className={style.home}
              onClick={() => scroll.scrollToTop()}
            >
              Home
            </a>
            <a href="/#whyus">Why Us</a>
            <a href="/#services">Service</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#contact">Contact</a>

            {!isUserLoggedIn ? (
              <a href="/SingIn">Login</a>
            ) : (
              <div className={style.login}>
                <p>Hello, {isUserLoggedIn.name}</p>
                <button className={style.btn} onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>

          <></>

          <button className={style.btnClose} onClick={toggleNavbar}>
            X
          </button>
        </nav>
        <button className={style.btnMenu} onClick={toggleNavbar}>
          <MenuOutlined />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
