import { useEffect, useState } from "react";
import "../styles/productCard.css";

const Products = () => {
  //useState Hook
  const [products, setProducts] = useState([]);

  // Function to Fetch Products
  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
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
        products.map((e, i) => {
          return (
            <div key={e.id} className="card-item">
              <img src={e.image} alt={e.title} className="image" />
              <h1 className="card-heading">
                {e.title.substring(0, 20) + "..."}
              </h1>
              <p className="description">
                {e.description.substring(0, 100) + "..."}
              </p>
              <p className="price">{"$ " + e.price}</p>
              <button className="add">Add to Cart</button>
            </div>
          );
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
