import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./nested/Dashboard";
import AdminLayout from "./nested/AdminLayout";
import Layout from "./nested/Layout";

/*
    1. Nested Routes
    2. Children
    3. Outlet
    4. Navigate
*/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login Page</h1>} />
        {/* nested route  */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="order" element={<h1>Order Page</h1>} />
          <Route path="cart" element={<Layout>Cart Page</Layout>} />
        </Route>
        {/* nested route  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
