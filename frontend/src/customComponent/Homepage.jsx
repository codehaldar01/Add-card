import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import EmptyCard from "./EmptyCard.jsx";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/all");
        const data = await response.json();
        console.log(data);
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      {products.length > 0 ? (
        products.map((prod, ind) => (
          <ProductCard
            key={ind}
            name={prod.name}
            price={prod.price}
            img={prod.img}
          />
        ))
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default Homepage;
