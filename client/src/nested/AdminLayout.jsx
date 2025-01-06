import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  let auth = localStorage.getItem('user');

  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>
};

export default AdminLayout;
