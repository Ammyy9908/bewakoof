import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  const categories = [
    {
      id: 1,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-category-boxes-0003-Men-s-Half-Sleeves-1614584567.jpg",
      title: "Half Sleeves",
    },
    {
      id: 2,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-shopping-FULL-MEN-1608009855.png",
      title: "Full Sleeves",
    },
    {
      id: 3,
      img:
        "https://images.bewakoof.com/uploads/grid/app/Printed-T-Shirts-for-Men-min-1610971901.jpg",
      title: "Printed T-shirts",
    },
    {
      id: 4,
      img:
        "https://images.bewakoof.com/uploads/grid/app/Plain-T-Shirts-for-Men-min-1610971900.jpg",
      title: "Plain T-shirts",
    },
    {
      id: 5,
      img:
        "https://images.bewakoof.com/uploads/grid/app/indo-fusion-bewakoof-online-fashion-men-caregory-box-1612529045.jpg",
      title: "Ethnic Fusion Wear",
    },
    {
      id: 6,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-category-boxes-0004-Men-s-Hoodies-1614584567.jpg",
      title: "Hoodies",
    },
    {
      id: 7,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-shopping-JACKET-MEN-1608009856.png",
      title: "Jakets",
    },
    {
      id: 8,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-shopping-HOODIE-MEN-1608009856.png",
      title: "Sweaters",
    },
    {
      id: 9,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-combo-pack-online-fashion-category-box-men-1614084935.png",
      title: "Combos & Packs",
    },
    {
      id: 10,
      img:
        "https://images.bewakoof.com/uploads/grid/app/Bewakoof-Online-Shopping-Category-Box-Men-s-Polo-TShirts-1609852757.jpg",
      title: "Polo T-shirts",
    },
    {
      id: 11,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-category-boxes-0010-Men-s-Vestv-1614584569.jpg",
      title: "Vests",
    },
    {
      id: 12,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-category-boxes-0005-Men-s-Jersey-Shirt-1614584568.jpg",
      title: "Shirts",
    },
    {
      id: 13,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-shopping-KURTA-MEN-1608009857.png",
      title: "Kurtas",
    },
    {
      id: 14,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-category-boxes-0006-Men-s-Joggers-1614584568.jpg",
      title: "Joggers",
    },
    {
      id: 15,
      img:
        "https://images.bewakoof.com/uploads/grid/app/cotm-category-boxes-0000-mens-shorts-1614584566.jpg",
      title: "Shorts",
    },
    {
      id: 16,
      img:
        "https://images.bewakoof.com/uploads/grid/app/bewakoof-online-fashion-shopping-pyjama-MEN-1608009858.png",
      title: "Pyjamas",
    },
    // {
    //   id: 17,
    //   img:
    //     "https://images.bewakoof.com/uploads/grid/app/Bewakoof-Online-Shopping-Category-Box-Men-s-Boxers-1609852757.jpg",
    //   title: "Boxers",
    // },
  ];
  return (
    <div className="category">
      <div className="category__wrapper">
        <div className="category__title">CATEGORIES FOR YOU</div>
        <div className="categories__cards">
          {categories.map((category, index) => (
            <CategoryCard
              img={category.img}
              title={category.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
