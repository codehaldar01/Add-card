import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
const EditCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [editProduct, setEditProduct] = useState({
    name: "",
    price: 0,
    img: "",
  });
  const handleCancel = ()=>{
    navigate('/')
  }
  useEffect(() => {
    const fetchProdDetails = async () => {
      try {
        const fetchCurProd = await fetch(`http://localhost:5000/api/products/${id}`);

        if (fetchCurProd.ok) {
          const response = await fetchCurProd.json();
          const result = response.data;
          setEditProduct({ name: result.name, price: result.price, img: result.img })
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };
    fetchProdDetails();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editProduct)
    })

    const result = await response.json();

    if (response.ok) {
      console.log("hello")
      // setProducts((prev) => {
      //   prev.map((prod) => (
      //     prod._id === id ? { ...prod, editProduct } : prod
      //   ))
      // })
      setEditProduct((prod) => {
        return {
          name: "",
          price: 0,
          img: ""
        }
      }
      )
      console.log("is navigate working?")
      navigate('/');
      console.log("is navigate working?")

    }
    else {
      console.log(result.console.error());
    }
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="m-auto flex flex-col justify-center items-center bg-orange-200 h-[70vh]">
      <h1 className="font-extrabold text-xl bg-blue-300 rounded-md p-1 ">Current Product Details</h1>
      <div className="flex flex-col border-2 border-solid w-2/5 bg-purple-300 p-5 rounded-lg font-bold h-[50vh] space-y-10 mt-2">
        <input
          className="border-solid border-2 border-black mt-1 mb-1 p-5 w-full rounded-lg text-lg"
          placeholder="Product Label"
          name="name"
          type="text"
          value={editProduct.name}
          onChange={(e) => {
            setEditProduct({ ...editProduct, name: e.target.value });
          }}
        />
        <input
          className="border-solid border-2 border-black mt-1 mb-1 p-5 w-full rounded-lg text-lg"
          placeholder="Enter product price"
          name="price"
          type="number"
          value={editProduct.price}
          onChange={(e) =>
            setEditProduct({ ...editProduct, price: e.target.value })
          }
        />
        <input
          className="border-solid border-2 border-black mt-1 mb-1 p-5 w-full rounded-lg text-lg"
          placeholder="Image URL"
          name="img"
          type="text"
          value={editProduct.img}
          onChange={(e) =>
            setEditProduct({ ...editProduct, img: e.target.value })
          }
        />
      </div>
      <div className='flex justify-between w-2/5 items-center '>
        <div className="font-extrabold text-xl bg-pink-300 p-2 rounded-md mt-2">
          <button onClick={handleSubmit}>Edit the Product</button>
        </div>
        <div className='font-extrabold text-xl p-2 rounded-md mt-2 w-1/2 bg-pink-500'>
          <button className='m-auto flex justify-between items-center w-1/2' onClick={handleCancel}>
            <GiCancel />
            <p>Cancel</p>
          </button>

        </div>
      </div>
    </div>
  )
}

export default EditCard