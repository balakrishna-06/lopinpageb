import React from "react";
import LoginPage from "./LoginPage";
import Formvalidate from "./Formvalidate";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home"element={<Home/>}/>
            <Route path="/formvalidate" element={<Formvalidate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
