import "../Styles/Gateway.css";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const DebitGateway = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Done");
    navigate("/");
    localStorage.removeItem("ItemsInCart");
  };
  return (
    <div className="cardMain">
      <div className="row">
        <div className="col-75">
          <div className="cardContainer">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  {/* <h4 id="to-pay"></h4> */}
                  <h3>Payment</h3>
                  <label>Accepted Cards</label>
                  <div className="icon-container">
                    <span>
                      <FaCcVisa style={{ color: "navy" }} />
                    </span>
                    <span>
                      <SiAmericanexpress style={{ color: "blue" }} />
                    </span>
                    <span>
                      <FaCcMastercard style={{ color: "red " }} />
                    </span>

                    <span>
                      <FaCcDiscover style={{ color: "orange" }} />
                    </span>
                  </div>
                  <label>Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Card Holder Name"
                    required
                  />
                  <label>Debit/Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    minLength="16"
                    maxLength="16"
                    required
                  />
                  <label>Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="Month"
                    required
                  />
                  <div className="row">
                    <div className="col-50">
                      <label>Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="Year"
                        minLength="4"
                        maxLength="4"
                        required
                      />
                    </div>
                    <div className="col-50">
                      <label>CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="Ex:352"
                        minLength="3"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="Place order" className="btn" />
            </form>
          </div>
        </div>
        <div className="col-25"></div>
      </div>
    </div>
  );
};
