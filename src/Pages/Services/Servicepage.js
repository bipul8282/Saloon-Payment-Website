import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import CustomButton from "../../Atom/Button/CustomButton";
import Navbar from "../../Components/Navbar/Navbar";
import { PricingList } from "../../ConstData/ProductData";
import { IsLogin } from "../../Recoil/Atom";
import Style from "./Servicepage.module.css";
function Servicepage() {
  const { id } = useParams();
  

  const [deatails, setDeatails] = useState("");

  let isUserLoggedIn = useRecoilValue(IsLogin);
  
  useEffect(() => {
    let Data = PricingList?.find((x) => x.id === +id);
    console.log(Data);
    setDeatails(Data);
  }, [id]);

  const price = deatails.rupe;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_VdGdvprTKB8u1w",
      currency: "INR",
      amount: amount * 100,
      name:"Hair Saloon",
      description: "Thanks for purchasing Our Package",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Hair Saloon",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Navbar />
      <div className={Style.container}>
        <div className={Style.box1}>
          <img className={Style.img} src={deatails.img} alt="sss" />
        </div>
        <div className={Style.box2}>
          <div className={Style.text}>
            <h4>{formatter.format(price)}</h4>
            <h6>{deatails.name}</h6>
            <p>{deatails.minutes}</p>
            {isUserLoggedIn ? (
              <CustomButton
                ButtonText="Book Now"
                className={Style.btn}
                type="submit"
                onClick={() => displayRazorpay(price)}
              />
            ) : (
              <CustomButton
                ButtonText="Book Now"
                className={Style.btn}
                type="submit"
                onClick={() => alert("Please Login/Register ")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicepage;
