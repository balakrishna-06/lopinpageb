import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import balapic from "./Images/bala.jpeg";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "./Actions";
import appleimg from "./Images/apple.jpg";
import waterimg from "./Images/watermelon.jpg";
import grapeimg from "./Images/grape.jpg";
import mangoimg from "./Images/mango.jpg";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);

  const handleClick = () => {
    dispatch(logout());
    navigate("/");
  };
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={balapic}
              alt="Avatar Logo"
              style={{ width: "40px" }}
              class="rounded-pill"
            />
          </a>
          <p className="mt-2" style={{ color: "white" }}>
            Welcome ,{username}!
          </p>
        </div>
        <button className="btn btn-warning" onClick={handleClick}>
          logout
        </button>
      </nav>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apple</h5>
                <img
                  src={appleimg}
                  style={{ width: "100%", height: "250px" }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Watermelon</h5>
                <img
                  src={waterimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Grapes</h5>
                <img
                  src={grapeimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mango</h5>
                <img
                  src={mangoimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apple</h5>
                <img
                  src={appleimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Watermelon</h5>
                <img
                  src={waterimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Grapes</h5>
                <img
                  src={grapeimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mango</h5>
                <img
                  src={mangoimg}
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
