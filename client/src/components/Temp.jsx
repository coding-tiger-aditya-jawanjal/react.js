import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useShop } from "../Context";

const Temp = ({ name }) => {
  const { soap, count , setSoap , setCount } = useShop();
  // useState
  // const [count, setCount] = useState(0);

  // useMemo hook - to memoise value
  const calculate = useMemo(() => {
    return 5000 * 100;
  }, [name]);

  // useCallback hook - to memoise function
  const greet = useCallback(() => {
    console.log("hello !");
  }, [name]);

  console.log(calculate);

  // useEffect
  useEffect(() => {
    console.log("Hello !");
  }, []);

  return (
    <div>
      <h1>Temp Component {count}</h1>
    </div>
  );
};

export default memo(Temp);
