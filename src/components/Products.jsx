import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      id: 1,
      primaryImage:
        "https://images.bewakoof.com/t320/plain-casual-badge-jogger-pants-men-s-plain-casual-badge-jogger-pants-321355-1615270084.jpg",
      secondaryImage: "",
      productTitle: "Product 1",
      productPrice: "300",
    },
    {
      id: 2,
      primaryImage:
        "https://images.bewakoof.com/t320/rust-orange-men-s-printed-waist-coat-waist-coat-men-s-aop-waist-coat-333646-1615204086.jpg",
      secondaryImage:
        "https://images.bewakoof.com/t320/rust-orange-men-s-printed-waist-coat-waist-coat-men-s-aop-waist-coat-333646-1615204104.jpg",
      productTitle: "Product 2",
      productPrice: "340",
    },
    {
      id: 3,
      primaryImage:
        "https://images.bewakoof.com/t320/black-men-s-casual-jogger-pants-with-zipper-nr-plain-men-s-casual-jogger-pants-with-zipper-nr-plain-321141-1615269866.jpg",
      secondaryImage: "",
      productTitle: "Product 3",
      productPrice: "310",
    },
    {
      id: 4,
      primaryImage:
        "https://images.bewakoof.com/t320/deep-lake--white-half-sleeve-stripes-polo-men-s-plain-half-sleeve-stripes-polo-278037-1614929594.jpg",
      secondaryImage: "",
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
    <div className="products">
      <div className="product__wrapper">
        <div className="title">What's New</div>
        <div className="products__slider">
          {products.map((product) => {
            return (
              <Product
                ptimaryImage={product.primaryImage}
                secondaryImage={product.secondaryImage}
                title={product.productTitle}
                price={product.productPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
