import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import { GrLocation } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export const NavBar = (props) => {
  const cartCheck = (value) => {
    return value === undefined
      ? "My Cart"
      : `${value} Items | ₹${props.cartValue}`;
  };

  const navigate = useNavigate();
  return (
    <div className="nav-bar-main">
      <div>
        <Link to="/">
          <img
            alt="blinkit"
            width="94"
            height="35"
            src="https://blinkit.com/images/header/blinkit-logo-05a0b5f.png"
          />
        </Link>
      </div>
      <div className="location-main">
        <div>
          <div className="nav-container-heading">Delivery in 25 minutes</div>
          <div className="nav-container-sub-heading">Rajajinagar,Bengaluru</div>
        </div>
        <div>
          <GrLocation className="location-logo" />
        </div>
      </div>
      <div className="search-main">
        <button className="search-btn">
          <GoSearch />
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="search for products"
        />
      </div>
      <div>
        <Link className="login" to="/login">
          Login/Register
        </Link>
      </div>
      <div className="cart-main">
        <button
          className="cart-btn"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <div className="cart-div">
            <div>
              <BsCart3 />
            </div>
            <div>
              <Link to="/register" />
              {`${cartCheck(props.cart)}`}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
