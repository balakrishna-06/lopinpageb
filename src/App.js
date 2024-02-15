import React from "react";
import Formvalidate from "./Formvalidate";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LoginPage from "./LoginPage";
import Signup from "./Signup";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/formvalidate" element={<Formvalidate />} />
            <Route path="/signup"element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
