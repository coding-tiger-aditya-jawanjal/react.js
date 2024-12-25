import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
          <Home />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;
