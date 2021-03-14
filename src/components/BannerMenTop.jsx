import React from "react";
import Banner from "./Banner";

function BannerMenTop() {
  const banners = [
    {
      id: 1,
      img:
        "https://images.bewakoof.com/uploads/grid/app/FOTM-hero-banner-men-1615569199.gif",
    },
    {
      id: 2,
      img:
        "https://images.bewakoof.com/uploads/grid/app/DOTD-hero-banner-men-1615626529.jpg",
    },
    {
      id: 3,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-roots-to-ramp-indofusion-wear-hero-banner-men-1-1615306414.jpg",
    },
    {
      id: 4,
      img:
        "https://images.bewakoof.com/uploads/grid/app/sumemr-sale-hero-abnner-1615654866.jpg",
    },
    {
      id: 5,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-polo-tshirt-banner-hero-1614944747.jpg",
    },
    {
      id: 6,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-buy-2-get-1-free-online-fashion-shopping-hero-banner-1614945598.jpg",
    },
  ];
  return (
    <div className="bannet__mens__top">
      <div className="banners__images">
        {banners.map((item, index) => (
          <Banner img={item.img} key={index} />
        ))}
      </div>
    </div>
  );
}

export default BannerMenTop;
