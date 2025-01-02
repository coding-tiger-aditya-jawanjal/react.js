import { memo, useCallback, useEffect, useMemo, useState } from "react";

const Temp = ({ name }) => {
  // useState
  const [count, setCount] = useState(0);

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
      <h1>Temp Component</h1>
    </div>
  );
};

export default memo(Temp);
