import React from "react";

function CategoryCard({ img, title }) {
  return (
    <div className="category__card">
      <a href="#">
        <img src={img} alt="category__thumb" />
        <h1>Hello</h1>
      </a>
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
