import React from "react";
import { useState } from "react";
const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    img: "",
  });

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/products",{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })

    const result = await response.json();

    if(response.ok){
      setNewProduct((prod)=>{
        return {
          name: "",
          price: 0,
          img: ""
        }
      } 
      )
    }
    else{
      console.log(result.console.error());
    }
  }

  return (
    <div className="m-auto flex flex-col justify-center items-center bg-orange-200 h-1/2">
      <h1 className="font-extrabold text-xl bg-blue-300 rounded-md p-1">Create A New Product</h1>
      <div className="flex flex-col border-2 border-solid w-2/5 bg-purple-300">
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
      <div className="font-extrabold text-xl bg-pink-300 p-2 rounded-md mt-2">
        <button onClick={handleSubmit}>Add the Product</button>
      </div>
    </div>
  );
};

export default CreateProduct;