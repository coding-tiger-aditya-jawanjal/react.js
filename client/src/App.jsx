import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Error from "./pages/Error";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
// import { useShop } from "./Context";

// lazy loading
const Error = lazy(() => import("./pages/Error"));

const App = () => {
  // const { setName } = useShop();

  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <BrowserRouter>
        <main>
          {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<SingleProduct />} />

              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

// <Route
//     path="/dogs"
//     element={
//       <>
//         <h1>These are 3 Dogs in the Area.</h1>
//       </>
//     }
//   />
//   <Route path="*" element={<Error />} />
