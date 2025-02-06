import { useEffect, useState } from "react";
import Task from "./Task";

const url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);

  const checkAuth = async () => {
    const data = await fetch(`${url}/private`);
    const res = await data.json();
    if (res?.user) {
      setAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return authenticated ? <Task /> : <div>App is there</div>;
};

export default App;
