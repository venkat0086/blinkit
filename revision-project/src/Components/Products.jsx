import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Products.css";
import { NavBar } from "./NavBar";
export const Products = () => {
  const [option, setOption] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState("");
  const [value, setValue] = useState(0);

  let storeCart = JSON.parse(localStorage.getItem("ItemsInCart")) || [];

  let totalSum = 0,
    totalDisc = 0;
  storeCart.forEach((e) => {
    totalSum += e.price;
    totalDisc += Math.round((+e.price * e.discount) / 100);
  });
  let mrp = totalSum - totalDisc;

  const calculate = (disc, price) => {
    let offer = (price * disc) / 100;
    return Math.round(price - offer);
  };

  useEffect(() => {
    showData();
  }, []);

  const filter = (ch, alt) => {
    axios
      .get(`https://blinkitapp.herokuapp.com/products?category=${ch}`)
      .then((res) => {
        setData(res.data);
        setShow(alt);
      });
  };
  useEffect(() => {
    axios.get("https://blinkitapp.herokuapp.com/products-image").then((res) => {
      setOption(res.data);
    });
  }, []);

  const showData = () => {
    axios.get("https://blinkitapp.herokuapp.com/products").then((res) => {
      setData(res.data);
    });
  };

  const ascSorting = () => {
    axios
      .get(`https://blinkitapp.herokuapp.com/products?sort=price&order=asc`)
      .then((res) => {
        setData([...res.data]);
      });
  };

  const dscSorting = () => {
    axios
      .get(`https://blinkitapp.herokuapp.com/products?sort=price&order=desc`)
      .then((res) => {
        setData([...res.data]);
      });
  };

  const addToCart = (id) => {
    axios.get(`https://blinkitapp.herokuapp.com/products/${id}`).then((res) => {
      storeCart.push(res.data);
      localStorage.setItem("ItemsInCart", JSON.stringify(storeCart));
      setValue(value + 1);
    });
  };

  return (
    <div className="products-container">
      <NavBar cart={storeCart.length} cartValue={mrp} />
      <div className="category-contain">
        <div className="categoryBar-main">
          {option.map((e) => (
            <div
              key={e._id}
              className="category-list"
              onClick={() => {
                filter(e.category, e.alt);
              }}
            >
              {e.alt}
            </div>
          ))}
        </div>
      </div>
      <div className="category-head">
        <div>{show}</div>
        <div>
          Sort By Price:
          <button
            onClick={() => {
              ascSorting();
            }}
          >
            Low To High
          </button>
          <button
            onClick={() => {
              dscSorting();
            }}
          >
            High To Low{" "}
          </button>
        </div>
      </div>
      <div className="products-main">
        {data.map((e) => (
          <div key={e._id} className="product-list">
            <div>
              <Link className="desc-main" to={`/products/${e._id}`}>
                <div>
                  <button className="product-off">{e.discount}% OFF</button>
                </div>
                <div>
                  <img src={e.images} alt={e.name} className="product-img" />
                </div>
                <div>{e.name}</div>
                <p>{e.qnty}</p>
              </Link>
              <div className="price-cart">
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {`₹${calculate(e.discount, e.price)}`}
                  </div>
                  <div>{`₹${e.price}`}</div>
                </div>
                <div>
                  <button
                    className="product-btn"
                    onClick={() => {
                      addToCart(e._id);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
