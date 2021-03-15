import React from "react";
import Product from "./Product";

function Trending() {
  const products = [
    {
      id: 1,
      primaryImage:
        "https://images.bewakoof.com/t540/men-s-tie--dye-printed-paradise-longline-t-shirt-men-s-printed-half-sleeve-longline-t-shirts-339832-1615555287.jpg",
      secondaryImage:
        "https://images.bewakoof.com/t540/men-s-tie--dye-printed-paradise-longline-t-shirt-men-s-printed-half-sleeve-longline-t-shirts-339832-1615555292.jpg",
      productTitle: "Product 1",
      productPrice: "300",
    },
    {
      id: 2,
      primaryImage:
        "https://images.bewakoof.com/t540/jooti-print-kurta-men-s-printed-mid-kurta-333723-1615204668.jpg",
      secondaryImage:
        "https://images.bewakoof.com/t540/jooti-print-kurta-men-s-printed-mid-kurta-333723-1615204671.jpg",
      productTitle: "Product 2",
      productPrice: "340",
    },
    {
      id: 3,
      primaryImage:
        "https://images.bewakoof.com/t540/go-into-the-unknown-half-sleeve-t-shirt-tropical-blue-men-s-printed-t-shirts-342062-1615553654.jpg",
      secondaryImage:
        "https://images.bewakoof.com/t540/go-into-the-unknown-half-sleeve-t-shirt-tropical-blue-men-s-printed-t-shirts-342062-1615553658.jpg",
      productTitle: "Product 3",
      productPrice: "310",
    },
    {
      id: 4,
      primaryImage:
        "https://images.bewakoof.com/t320/deep-lake--white-half-sleeve-stripes-polo-men-s-plain-half-sleeve-stripes-polo-278037-1614929594.jpg",
      secondaryImage:
        "https://images.bewakoof.com/t540/go-into-the-unknown-half-sleeve-t-shirt-tropical-blue-men-s-printed-t-shirts-342062-1615553658.jpg",
      productTitle: "Product 4",
      productPrice: "380",
    },
    {
      id: 5,
      primaryImage:
        "https://images.bewakoof.com/t320/jooti-print-kurta-mid-kurta-men-s-printed-mid-kurta-333758-1615197229.jpg",
      secondaryImage: "",
      productTitle: "Product 5",
      productPrice: "480",
    },
    {
      id: 6,
      primaryImage:
        "https://images.bewakoof.com/t320/men-s-printed-manadarin-collar-blue-shirt-men-s-indo-fusion-aop-short-kurta-324611-1615204007.jpg",
      secondaryImage: "",
      productTitle: "Product 6",
      productPrice: "500",
    },
    {
      id: 7,
      primaryImage:
        "https://images.bewakoof.com/t320/go-into-the-unknown-half-sleeve-t-shirt-white-men-s-printed-t-shirts-342061-1615553830.jpg",
      secondaryImage: "",
      productTitle: "Product 7",
      productPrice: "600",
    },
  ];
  return (
    <div className="trending">
      <div className="trending__wrapper">
        <div className="title">Trending</div>
        <div className="products__slider">
          {products.map((product) => {
            return (
              <Product
                ptimaryImage={product.primaryImage}
                secondaryImage={product.secondaryImage}
                title={product.productTitle}
                price={product.productPrice}
                key={product.id}
              />
            );
          })}
        </div>
        <a href="/" className="view__all">
          View All
        </a>
      </div>
    </div>
  );
}

export default Trending;
