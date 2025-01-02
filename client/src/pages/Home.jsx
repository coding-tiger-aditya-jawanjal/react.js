import { useReducer } from "react";
import { useShop } from "../Context";

const Home = () => {
  const { count, setCount } = useShop();

  return (
    <div className="home">
      <div className="temp">
        <h2 onClick={() => setCount((pre) => pre + 2)}> - </h2>
        <h1>{count}</h1>
        <h2> + </h2>
      </div>
    </div>
  );
};

export default Home;
