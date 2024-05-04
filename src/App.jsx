import { Toast } from "react-bootstrap";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top center" />
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
