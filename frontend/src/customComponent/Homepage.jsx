import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import EmptyCard from "./EmptyCard.jsx";
import useProductsFetch from "../CRUD/useProductsFetch.js";

const Homepage = () => {
  
  const [products, setProducts] = useProductsFetch("http://localhost:5000/api/products/all");
 
  return (
    <div className="">
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
