import React from "react";
import Product from "./Product";

const products = {
  dailyPick: [
    {
        id: 1,
        name: "Cooperate Office Shirt",
        price: 200,
        imageUrl: "./Images/cooperateofficeshirt.jpeg",        
    },
    {
      id: 2,
      name: "Light Lady's Top",
      imageUrl: "./Images/ladieslighttop.jpeg",
      price: 200,
    },
    {
      id: 3,
      name: "Pink Lady's Coat",
      imageUrl: "./Images/pinkladiescoat.jpeg",
      price: 200,
    },
    { id: 4,
        name: "Sweat Jacket", 
        imageUrl: "./Images/sweatjacket.jpeg",
        price: 200, 
    },
    { id: 5, name: "Cooperate Office Shirt", imageUrl: "./Images/cooperativeofficeshirt.jpeg", price: 200 },
    { id: 6, name: "Men Jean Jacket", imageUrl: "./Images/menjeanjacket.jpeg",price: 200 },
    { id: 7, name: "Casual Shirt for Men", imageUrl: "./Images/casualshirtformen.jpeg",price: 200 },
    { id: 8, name: "Ladies Baggy Sweat Wear", imageUrl: "./Images/ladiesbaggy.jpeg", price: 200 },
  ],
  ladiesLove: [
    { id: 9, name: "Pink Lady's Coat", imageUrl: "./Images/pinkcoat.jpeg",price: 200 },
    { id: 10, name: "Ladies Baggy Sweat Wear", imageUrl: "./Images/ladiesbaggy.jpeg",price: 200 },
    { id: 11, name: "Black Dinner Gown", imageUrl: "./Images/blackdinner.jpeg",price: 200 },
    { id: 12, name: "Waist Belt for Ladies", imageUrl: "./Images/waistbelt.jpeg",price: 200 },
    { id: 13, name: "Knitted Top", imageUrl: "./Images/knitted.jpeg",price: 200 },
    { id: 14, name: "Jean and Sweater", imageUrl: "./Images/jeanandsweater.jpeg", price: 200 },
    { id: 15, name: "Pink Lady's Coat", imageUrl: "./Images/pinkladiescoat2.jpeg", price: 200 },
    { id: 16, name: "Light Lady's Top", imageUrl: "./Images/lighttop.jpeg", price: 200 },
  ],
  forMen: [
    { id: 17, name: "Men Jean Jacket", imageUrl: "./Images/menjean.jpeg", price: 200 },
    { id: 18, name: "Casual Shirt for Men", imageUrl: "./Images/casual.jpeg",price: 200 },
    { id: 19, name: "Street Fashion Wear", imageUrl: "./Images/streetfash.jpeg", price: 200 },
    { id: 20, name: "Cooperate Office Shirt", imageUrl: "./Images/cooperateofficeshirt.jpeg",price: 200 },
    { id: 21, name: "Cooperate Office Shirt", imageUrl: "./Images/cooperate.jpeg", price: 200 },
    { id: 22, name: "Casual-Cooperate Wear", imageUrl: "./Images/casual-cop.jpeg", price: 200 },
    { id: 23, name: "Sweat Shirt", imageUrl: "./Images/sweatshirt.jpeg", price: 200 },
    { id: 24, name: "Vintage Shirt", imageUrl: "./Images/vintage.jpeg", price: 200 },
  ],
};

function ProductList({ addToCart }) {
    return (
      <div className="product-list">
        <div className="product-category">
          <h3 className="category-title">Daily Pick</h3>
          <button className="seemorebtn">See More</button>
          <div className="product-row">
            {products.dailyPick.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="product-category">
          <h3 className="category-title">Ladies Love</h3>
          <button className="seemorebtn">See More</button>
          <div className="product-row">
            {products.ladiesLove.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="product-category">
          <h3 className="category-title">For Men</h3>
          <button className="seemorebtn">See More</button>
          <div className="product-row">
            {products.forMen.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default ProductList;
