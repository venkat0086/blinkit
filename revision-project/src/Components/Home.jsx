import "../Styles/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import paan from "../Images/paan.jpg";
import { NavBar } from "./NavBar";
export const Home = () => {
  const [category, setCategory] = useState([]);
  let storeCart = JSON.parse(localStorage.getItem("ItemsInCart")) || [];
  let totalSum = 0,
    totalDisc = 0;
  storeCart.forEach((e) => {
    totalSum += e.price;
    totalDisc += Math.round((+e.price * e.discount) / 100);
  });
  let mrp = totalSum - totalDisc;

  useEffect(() => {
    axios.get("https://blinkitapp.herokuapp.com/products-image").then((res) => {
      setCategory([...res.data]);
    });
  }, []);

  return (
    <div>
      <NavBar cart={storeCart.length} cartValue={mrp} />
      <div className="main-container">
        <div className="paan-img">
          <img src={paan} alt="paan corner" width="100%" />
        </div>
        <div className="category-main-img">
          {category.map((e) => (
            <div key={e._id}>
              <Link to={`/products`}>
                <img src={e.image} alt={e.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
