import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
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
