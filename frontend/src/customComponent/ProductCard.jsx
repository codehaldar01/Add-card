import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import EditCard from './EditCard.jsx'
import { useNavigate } from "react-router-dom";
const url = "http://localhost:5000/api/products";

const ProductCard = ({ name, price, img, id, setProducts }) => {
  const navigate = useNavigate();
  const handleDelete=async()=>{
    try {
      const del = await fetch(`${url}/${id}`,{method: "DELETE"});
      if(del.ok){
        setProducts((prev)=>prev.filter((product)=>product._id!==id))
        console.log("product deleted successfully")
      }
      else{
        console.log("Error in deleting")
      }
  
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async()=>{
    navigate(`/edit/${id}`)
  }
  return (
    <div className="w-full max-w-sm mx-auto p-4 hover:scale-110  mt-1 mb-1 transition-all duration-2000 ease-in-out">
      <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md hover:shadow-purple ">
        <img
          src={img}
          alt="image is loading"
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-xl text-gray-700">Rs.{price}</p>
        </div>
        <div className="flex justify-between items-center m-1">
          <Link to="/LearnMore" className="text-blue-800">
            {" "}
            Learn More{" "}
          </Link>
          <div className="m-2 font-md">
            <button>
              <CiEdit onClick={ handleUpdate} />
            </button>
            <button onClick={ handleDelete }>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
