import React from "react";
import { useSelector } from "react-redux";
import balapic from './Images/bala.jpeg'


export default function Home() {
  const username = useSelector((state) => state.auth.username);

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
          <p style={{color:"white"}}>Welcome ,{username}!</p>
        </div>
      </nav>
    </div>
  );
}
