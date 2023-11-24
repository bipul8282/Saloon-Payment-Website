import React from "react";
import style from "./Hero.module.css";
import { Carousel } from "antd";

function Hero() {
  const imageSlide = [
    {
      id: 1,
      img: "https://images.fresha.com/locations/location-profile-images/239805/547217/a96f6cf8-4286-4107-8568-989143e4befc.jpg?class=fallback",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20824.jpg",
    },
    {
      id: 3,
      img: "https://c8.alamy.com/comp/HH3EKJ/young-man-getting-haircut-at-barber-shop-hairdresser-with-customer-HH3EKJ.jpg",
    },
  ];
  return (
    <Carousel  infinite easing="linear">
      {imageSlide.map((x) => (
        <div key={x.id} className={style.HeroWrapper}>
          <img className={style.heroImage} src={x.img} alt={`Slide ${x.id}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
