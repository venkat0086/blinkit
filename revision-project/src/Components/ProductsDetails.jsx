import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import "../Styles/ProductDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
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

  const addToCart = (id) => {
    axios.get(`https://blinkitapp.herokuapp.com/products/${id}`).then((res) => {
      storeCart.push(res.data);
      localStorage.setItem("ItemsInCart", JSON.stringify(storeCart));
      setValue(value + 1);
    });
  };

  useEffect(() => {
    axios.get(`https://blinkitapp.herokuapp.com/products/${id}`).then((res) => {
      setList(res.data);
    });
  }, [id]);

  return (
    <div>
      <NavBar cart={storeCart.length} cartValue={mrp} />

      <div className="item-container">
        <div>
          <img src={list.images} alt="img" />
        </div>
        <div>
          <div className="item-details">
            <div>
              <div>{list.name}</div>
              <div>{list.qnty}</div>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {`₹${calculate(list.discount, list.price)}`}
              </span>
              {"    "}
              <span>{`₹${list.price}`}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(list._id);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <hr />
          <div className="item-unit">
            <div>Unit</div>
            <button>{list.qnty}</button>
          </div>
        </div>
      </div>
      <div className="item-desc-main">
        <div className="item-desc">
          <h3>Product Details</h3>
          <hr />
          <div style={{ fontSize: "18px", fontWeight: "500" }}>Seller</div>
          <div>{list.seller}</div>
          <hr />
          <div style={{ fontSize: "18px", fontWeight: "500" }}>Descption</div>
          <div>{list.description}</div>
          <hr />
        </div>
        <div>
          <div className="item-desc-head">Why shop from blinkit?</div>
          <div className="item-desc-two">
            <div>
              <div>
                <img
                  src="https://blinkit.com/images/home/express-delivery-icon-93fce76.png"
                  alt=""
                />
              </div>
              <div>
                <div>Superfast Delivery</div>
                <div>
                  Get your order delivered to your doorstep at the earliest from
                  dark stores near you.
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://blinkit.com/images/home/footer-best-price-icon-90b5bd7.png"
                  alt=""
                />
              </div>
              <div>
                <div>Best Prices & Offers</div>
                <div>
                  Cheaper prices than your local supermarket, great cashback
                  offers to top it off.
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://blinkit.com/images/home/footer-genuine-products-icon-d2756ce.png"
                  alt=""
                />
              </div>
              <div>
                <div>Wide Assortment</div>
                <div>
                  Choose from 5000+ products across food, personal care,
                  household & other categories.
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://blinkit.com/images/home/footer-easy-returns-icon-02b777e.png"
                  alt=""
                />
              </div>
              <div>
                <div>Easy Returns</div>
                <div>
                  Not satisfied with a product? Return it at the doorstep & get
                  a refund within hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
