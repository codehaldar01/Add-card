import React, {useState, useEffect} from "react";

const useProductsFetch=(url)=>{
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
    return [products, setProducts];
}
export default useProductsFetch