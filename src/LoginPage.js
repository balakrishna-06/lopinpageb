import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./Actions";
import { useNavigate } from "react-router-dom";
import backgroundIMG from "./Images/nature.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };
  if (isLoggedIn) {
    navigate("/home");
  }

  return (
    <div >
      <div className="card mb-3" >
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <div className="form-outline mb-4">
                <input
                  type="email"
                  value={email}
                  id="form2Example1"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button onClick={handleLogin}>Login</button>
              {isLoggedIn && <p></p>}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
