import { NavBar } from "./NavBar";
import "../Styles/Payment.css";
import upiImage from "../Images/upi.png";
import { FaCreditCard } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsCash } from "react-icons/bs";
import secureImg from "../Images/secure.jpg";
import upiImg from "../Images/upi-image.jpg";
import cashImg from "../Images/pod.png";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="payment-container">
        <div className="pay-mode">
          <div className="price-display">
            <h3>Select Payment Mode</h3>
            <h3 className="p-dis">.</h3>
          </div>

          <div className="main-payment">
            <div className="pay-choice">
              <div
                className="debit"
                onClick={() => {
                  document.getElementsByClassName("debitPay")[0].style.display =
                    "block";
                  document.getElementsByClassName(
                    "creditPay"
                  )[0].style.display = "none";
                  document.getElementsByClassName("upiPay")[0].style.display =
                    "none";
                  document.getElementsByClassName("cashPay")[0].style.display =
                    "none";
                }}
              >
                <div>
                  <div>
                    <FaCreditCard className="icons" />
                  </div>
                  <div>Debit Card</div>
                </div>
                <div>
                  <BsFillArrowRightCircleFill className="icons" />
                </div>
              </div>

              <div
                className="credit"
                onClick={() => {
                  document.getElementsByClassName(
                    "creditPay"
                  )[0].style.display = "block";
                  document.getElementsByClassName("debitPay")[0].style.display =
                    "none";
                  document.getElementsByClassName("upiPay")[0].style.display =
                    "none";
                  document.getElementsByClassName("cashPay")[0].style.display =
                    "none";
                }}
              >
                <div>
                  <div>
                    <FaCreditCard className="icons" />
                  </div>
                  <div>Credit Card</div>
                </div>
                <div>
                  <BsFillArrowRightCircleFill className="icons" />
                </div>
              </div>

              <div
                className="upi-div"
                onClick={() => {
                  document.getElementsByClassName("upiPay")[0].style.display =
                    "block";
                  document.getElementsByClassName(
                    "creditPay"
                  )[0].style.display = "none";
                  document.getElementsByClassName("debitPay")[0].style.display =
                    "none";
                  document.getElementsByClassName("cashPay")[0].style.display =
                    "none";
                }}
              >
                <div>
                  <div>
                    <img src={upiImage} alt="" className="upi" />
                  </div>
                  <div>UPI/BHIM</div>
                </div>
                <div>
                  <BsFillArrowRightCircleFill className="icons" />
                </div>
              </div>

              <div
                className="cash"
                onClick={() => {
                  document.getElementsByClassName("upiPay")[0].style.display =
                    "none";
                  document.getElementsByClassName(
                    "creditPay"
                  )[0].style.display = "none";
                  document.getElementsByClassName("debitPay")[0].style.display =
                    "none";
                  document.getElementsByClassName("cashPay")[0].style.display =
                    "block";
                }}
              >
                <div>
                  <div>
                    <BsCash className="icons" />
                  </div>
                  <div>Cash/Card On Delivery</div>
                </div>
                <div>
                  <BsFillArrowRightCircleFill className="icons" />
                </div>
              </div>
            </div>
            <div className="pay-now">
              <div className="debitPay">
                <img className="secure-img" src={secureImg} alt="" />
                <div>Pay securely using your Debit Card.</div>
                <button
                  className="btn-debit"
                  onClick={() => {
                    navigate("/cardpay");
                  }}
                >
                  PAY SECURELY
                </button>
              </div>
              <div className="creditPay">
                <img className="secure-img" src={secureImg} alt="" />
                <div>Pay securely using your Credit Card.</div>
                <button
                  className="btn-debit"
                  onClick={() => {
                    navigate("/cardpay");
                  }}
                >
                  PAY SECURELY
                </button>
              </div>
              <div className="upiPay">
                <img className="secure-img" src={upiImg} alt="" />
                <div>
                  Pay using your VPA (UPI ID) or the QR code scanner on your UPI
                  App (GPay, PhonePe, AmazonPay etc).
                </div>
                <button
                  className="btn-debit"
                  onClick={() => {
                    navigate("/upipay");
                  }}
                >
                  PAY SECURELY
                </button>
              </div>
              <div className="cashPay">
                <img className="secure-img" src={cashImg} alt="" />
                <div>You can pay by CARD or CASH at the time of delivery.</div>
                <button
                  className="btn-debit"
                  onClick={() => {
                    alert("Payment Done");
                    navigate("/");
                    localStorage.removeItem("ItemsInCart");
                  }}
                >
                  PAY SECURELY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
