import Navbar from "./Component/Navbar/Navbar";
import "./App.css"
import ProductList from "./Component/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import Cart from "./Component/Cart/Cart";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Orders from "./Component/Orders/Orders";
import WishList from "./Component/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;