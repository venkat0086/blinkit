import { NavBar } from "./NavBar";
import "../Styles/Cart.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Cart = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  let storeCart = JSON.parse(localStorage.getItem("ItemsInCart")) || [];
  const calculate = (price, disc) => {
    let offer = (price * disc) / 100;
    return Math.round(price - offer);
  };

  let totalSum = 0,
    totalDisc = 0;
  storeCart.forEach((e) => {
    totalSum += e.price;
    totalDisc += Math.round((+e.price * e.discount) / 100);
  });
  let mrp = totalSum - totalDisc;
  let billTotal = mrp + 10;

  const removeItem = (getId) => {
    const items = JSON.parse(localStorage.getItem("ItemsInCart"));
    // const filteredData = items.filter((item) => item.id !== getId);
    const index = items.findIndex((element) => element._id === getId);
    if (index > -1) {
      items.splice(index, 1);
    }
    localStorage.setItem("ItemsInCart", JSON.stringify(items));
    setValue(value + 1);
  };

  return (
    <div>
      <NavBar cart={storeCart.length} cartValue={mrp} />
      <div className="cartPage-container">
        <h1>My Cart</h1>
        <div className="cartPage-main">
          <div className="cartPage-product">
            <h2 style={{ marginLeft: "5%" }}>Products</h2>
            <hr />
            {storeCart.map((e, index) => (
              <div key={index} className="cartPage-item">
                <div>
                  <img src={e.images} alt={e.name} />
                </div>
                <div className="cartPage-item-details">
                  <div>
                    <div style={{ fontSize: "18px" }}>{e.name}</div>
                    <div>
                      <span className="cartPage-span">
                        ₹{calculate(e.price, e.discount)}
                      </span>
                      {"  "}
                      <span style={{ textDecoration: "line-through" }}>
                        ₹{e.price}
                      </span>
                    </div>
                    <div>{e.qnty}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        removeItem(e._id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cartPage-bill">
            <div>
              <div style={{ border: "1px solid #ccc", paddingLeft: "3%" }}>
                <h2>Bill Details</h2>
              </div>
              <div className="cartPage-bill-main">
                <div>
                  <div>MRP</div>
                  <div>
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "14px",
                      }}
                    >
                      ₹{totalSum}
                    </span>
                    {"  "}
                    <span>₹{mrp}</span>
                  </div>
                </div>
                <div>
                  <div>Product Discount</div>
                  <div style={{ fontWeight: "bold", color: "#51aa1b" }}>
                    ₹{totalDisc}
                  </div>
                </div>
                <div>
                  <div>Package Charge</div>
                  <div style={{ fontWeight: "bold", color: "crimson" }}>
                    ₹10
                  </div>
                </div>
                <div>
                  <div>Delivery Charge</div>
                  <div>
                    <span style={{ fontWeight: "bold", color: "#51aa1b" }}>
                      free
                    </span>{" "}
                    <span style={{ textDecoration: "line-through" }}>₹25</span>
                  </div>
                </div>
                <hr />
                <div style={{ fontWeight: "bold" }}>
                  <div>Bill Total</div>
                  <div>₹{billTotal}</div>
                </div>
              </div>
              <div className="cartPage-pay">
                <button
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  Proceed To Pay ₹{billTotal}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
