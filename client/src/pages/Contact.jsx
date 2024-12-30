import { useEffect, useState } from "react";

const Contact = () => {
 // useState Hook
  const [count, setCount] = useState(0);

  // useEffect Hook 
  // useEffect(func , array)
  useEffect(() => {
    alert(`The Count is : ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>Change</button>
    </div>
  );
};

export default Contact;

// Class Components         Functional Components

// 3 Life cycle method       useEffect();
// 1. componentDidMount()
// 2. ComponentDidUpdate()
// 3. componentDidUnmount()
