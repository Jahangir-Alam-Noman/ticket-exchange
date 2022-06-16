import React from "react";
import image from "../../../assets/img/banner/banner_1.jpg";

const Banner = () => {
  return (
    <div className="container">
      <img src={image} alt="" className="img-fluid" />
    </div>
  );
};

export default Banner;
