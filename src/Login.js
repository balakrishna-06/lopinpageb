import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./Actions";
// import "./Loginstyles.css";
import "./Loginstyles.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  const handlesignup = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container ">
      <div className="w-50 mx-auto py-5 login-form shadow">
        <h3 className="text-info">Login In</h3>
        <hr />
        <div className="mb-3">
          <label htmlFor="form2Example1" className="form-label text-warning">
            Email address
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            id="form2Example1"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="form2Example2" className="form-label text-warning">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            id="form2Example2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <p className="text-white mt-2">Don't have an account?</p>
        <button className="btn btn-warning" onClick={handlesignup}>
          signup
        </button>
      </div>
    </div>
  );
}
