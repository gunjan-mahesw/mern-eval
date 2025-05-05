import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Product from "./product";
import Homepage from "./homepage";
import Signin from "./signin";
import Signup from "./signup";
import Cart from "./cart";
import Thankyou from "./thankyou";
import Orderlist from "./orderList";
import OrderItem from "./orderItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/order/:id" element={<OrderItem />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
