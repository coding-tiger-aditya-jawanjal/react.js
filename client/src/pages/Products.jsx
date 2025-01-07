import { useEffect, useState } from "react";
import "../styles/productCard.css";
import ProductCard from "../components/ProductCard";

const Products = () => {
  //useState Hook
  const [products, setProducts] = useState([]);

  // Function to Fetch Products
  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await data.json();
    setProducts(result);
  };

  // useEffect Hook
  useEffect(() => {
    fetchProducts();
  }, []);

  //using map method on array to show data
  return (
    <div className="main-card">
      {products?.length > 0 ? (
        products.map((e) => {
          return <ProductCard key={e.id} e={e} />;
        })
      ) : (
        <>
          <p>No Products Available !</p>
        </>
      )}
    </div>
  );
};

export default Products;

// https://www.backend.com/api/v1/products

// APIs - Application Programming Interface
