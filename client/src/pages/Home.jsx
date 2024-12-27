import { useState } from "react";

const Home = () => {
  // useState Hook
  const [count, setCount] = useState(0);
  //     variable - function          initial value

  const handleMinus = () => {
    setCount((pre) => pre - 1);
  };

  const handlePlus = () => {
    setCount((pre) => pre + 1);
  };

  return (
    <div className="home">
      <div className="temp">
        <h2 onClick={handleMinus}> - </h2>
        <h1>{count}</h1>
        <h2 onClick={handlePlus}> + </h2>
      </div>
    </div>
  );
};

export default Home;
