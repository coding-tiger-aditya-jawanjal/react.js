import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const array = [1, { name: "Aditya" }, [45, "jgsfhjsg"]];

const AdminLayout = () => {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(array));
  }, []);

  let auth = true;


  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default AdminLayout;
