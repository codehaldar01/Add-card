import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import EmptyCard from "./EmptyCard.jsx";
import useProductsFetch from "../CRUD/useProductsFetch.js";

const Homepage = () => {
  
  const [products, setProducts] = useProductsFetch("https://add-card-7epj.onrender.com/api/products/all");
 
  return (
    <div className="dark:bg-gray-700 dark:text-white">
      {products.length > 0 ? (
        products.map((prod, ind) => (
          <ProductCard
            key={ind}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            id={prod._id}
            setProducts={setProducts}
          />
        ))
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default Homepage;
