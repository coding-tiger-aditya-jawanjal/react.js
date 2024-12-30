import { useEffect, useState } from "react";

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
    <div>
      {products?.length > 0 ? (
        products.map((e, i) => {
          return (
            <div key={e.id}>
              <h1>{i + 1 + " . " + e.title}</h1>
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
