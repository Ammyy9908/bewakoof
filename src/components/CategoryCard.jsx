import React from "react";

function CategoryCard({ img, title }) {
  return (
    <div className="category__card">
      <a href="/">
        <img src={img} alt="category__thumb" />
      </a>
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
