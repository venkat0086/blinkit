import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import {
  registerFailure,
  registerLoading,
  registerSuccess,
} from "../Redux/Register/action";
import "../Styles/Login.css";
import { NavBar } from "./NavBar";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const { isAuthenticated } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const registerDetails = {
      username,
      password,
      name,
      email,
      mobile,
      description,
    };

    dispatch(registerLoading());
    fetch(`https://blinkitapp.herokuapp.com/register`, {
      method: "POST",
      body: JSON.stringify(registerDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          alert(res.message);
        } else {
          dispatch(registerSuccess(res));
          navigate("/login");
        }
      })
      .catch((err) => {
        dispatch(registerFailure());
        alert("Registrattion Failed");
      });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-form">
      <NavBar />
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label>Email: </label>{" "}
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Username: </label>{" "}
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <label>Mobile Number: </label>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <br />
      <br />
      <label>Description: </label>
      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Register</button>
      <div>
        Already have an account?
        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};
