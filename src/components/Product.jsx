import React from "react";

function Product({ ptimaryImage, secondaryImage, title, price }) {
  const handleHover = (e) => {
    e.target.setAttribute(
      "src",
      secondaryImage ? secondaryImage : ptimaryImage
    );
  };

  const handleMouseOut = (e) => {
    e.target.setAttribute("src", ptimaryImage);
  };
  return (
    <div className="productCard">
      <a href="/">
        <img
          src={ptimaryImage}
          alt="product__card__image"
          onMouseOver={handleHover}
          onMouseLeave={handleMouseOut}
        />
      </a>
      <div className="product__Dec">
        <span className="product__title">{title}</span>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

export default Product;
