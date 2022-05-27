import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/SignUp";
import { Products } from "./Components/Products";
import { Adddata } from "./AddData";
import { ProductDetails } from "./Components/ProductsDetails";
import { Cart } from "./Components/Cart";
import { Payment } from "./Components/Payment";
import { DebitGateway } from "./Components/DebitGateway";
import { UpiGateway } from "./Components/UpiGateway";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Payment />
            </PrivateRoute>
          }
        />

        <Route
          path="/cardpay"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DebitGateway />
            </PrivateRoute>
          }
        />
        <Route
          path="/upipay"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <UpiGateway />
            </PrivateRoute>
          }
        />

        <Route path="/products" element={<Products />} />

        <Route path="/register" element={<Signup />} />
        <Route path="/addproduct" element={<Adddata />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
