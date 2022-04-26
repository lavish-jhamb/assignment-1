import { Link, useNavigate } from "react-router-dom";
import Style from "./Index.module.css";

function Navbar() {
  const navigate = useNavigate();
  const isAuth = JSON.parse(localStorage.getItem("auth"));
  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className={Style.navbar}>
      <header className={Style.header}>
        <div className={Style.iconContainer}>
          <img src="/logo192.png" alt="icon" />
        </div>
        <h5>Ecommerce</h5>
      </header>
      <div className={Style.registration}>
        {isAuth ? (
          <div>
            <Link to="/">products</Link>
            <Link to="/orders">orders</Link>
            <Link to="/cart">cart</Link>
            <span>{cart?.length}</span>
            <Link to="/wishlist">wishlist</Link>
            <a href="/" onClick={handleLogout} className={`btn btn-sm ${Style.logout} `} type="button">| logout |</a>
          </div>
        ) : (
          <div>
            <Link className={Style.products} to="/">
              Products |
            </Link>
            <Link to="/login">Login</Link>
            <Link to="/register">register</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;