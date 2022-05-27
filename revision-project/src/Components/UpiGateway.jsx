import { Link, useNavigate } from "react-router-dom";
import upiImg from "../Images/upi-image.jpg";
import billDesk from "../Images/billdesk.jpg";
import "../Styles/UpiGateway.css";
export const UpiGateway = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Done");
    navigate("/");
  };
  return (
    <div className="upi-main">
      <div className="upiContainer">
        <div className="nav-upi">
          <img src={upiImg} alt="upi-logo" />
          <img src={billDesk} alt="billdesk" />
        </div>
        <div className="pay-details">
          <div>
            <div>BlinkIT</div>
            <div>Merchant Name</div>
          </div>
          <div>
            <div className="p-dis"></div>
            <div>Amount To Pay</div>
          </div>
          <div>
            <div>WHD40856015233</div>
            <div>Transcation Refernce Number</div>
          </div>
        </div>
        <div className="make-pay">
          <form onSubmit={handleSubmit}>
            <h3>Enter your UPI ID / VPA</h3>
            <input type="email" required />
            <br />
            <br />
            <input
              type="submit"
              value="Make Payment"
              onSubmit={() => {
                alert("Payment Done");
                navigate("/products");
                localStorage.removeItem("ItemsInCart");
              }}
            />
          </form>
        </div>
        <div>
          <Link to="/payment">Cancel and Go back </Link>
          <span>to merchant</span>
        </div>
      </div>
    </div>
  );
};
