import { useReducer } from "react";

const Home = () => {
  // useReducer Hook
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="home">
      <div className="temp">
        <h2 onClick={() => dispatch({ type: "dec" })}> - </h2>
        <h1>{count}</h1>
        <h2 onClick={() => dispatch({ type: "inc" })}> + </h2>
      </div>
    </div>
  );
};

export default Home;
