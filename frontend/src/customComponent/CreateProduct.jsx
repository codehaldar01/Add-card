import React from "react";
import { useState } from "react";
const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-xl">Create A New Product</h1>
      <div className="flex flex-col border-2 border-solid w-2/3">
        <input
          className="border-solid border-2 border-black mt-1 mb-1"
          placeholder="Product Label"
          name="name"
          type="text"
          value={newProduct.name}
          onChange={(e) => {
            setNewProduct({ ...newProduct, name: e.target.value });
          }}
        />
        <input
          className="border-solid border-2 border-black mt-1 mb-1"
          placeholder="Enter product price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          className="border-solid border-2 border-black mt-1 mb-1"
          placeholder="Image URL"
          name="img"
          type="text"
          value={newProduct.img}
          onChange={(e) =>
            setNewProduct({ ...newProduct, img: e.target.value })
          }
        />
      </div>
      <div className="font-extrabold text-xl bg-green-300 p-2 rounded-md mt-2">
        <button>Add the Product</button>
      </div>
    </div>
  );
};

export default CreateProduct;
