import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, img }) => {
  return (
    <div className="w-full max-w-sm mx-auto p-4 hover:scale-110  mt-1 mb-1 transition-all duration-2000 ease-in-out">
      <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md hover:shadow-purple ">
        <img src={img} alt="image is loading" className="w-full h-auto object-cover"/>
        <div className="p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-xl text-gray-700">Rs.{price}</p>
        </div>
        <Link to="/LearnMore" className="text-blue-800"> Learn More </Link>
      </div>
    </div>
  );
};

export default ProductCard;
