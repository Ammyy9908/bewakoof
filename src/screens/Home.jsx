import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Tab from "../components/Tab";
import BannerMenTop from "../components/BannerMenTop";
import Widgets from "../components/Widgets";
import Products from "../components/Products";
import Category from "../components/Category";
import Trending from "../components/Trending";

function Home() {
  return (
    <div>
      <Navbar />
      <Tab />
      <BannerMenTop />
      <Widgets />
      <Products />
      <Category />
      <Trending />
    </div>
  );
}

export default Home;
