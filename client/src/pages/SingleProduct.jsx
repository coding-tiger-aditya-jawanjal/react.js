import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product No : {params.id}</h1>
    </div>
  );
};

export default SingleProduct;

/*
    1. make good styling for SingleProduct
    2. show data from api
    3. make sure the data changes
*/ 