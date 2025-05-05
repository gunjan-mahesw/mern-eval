import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
;
import Signin from "./signin";
import Signup from "./signup";
import ProductItem from "./ProductItem";
import CreateProduct from "./CreateProduct";
import GetAllProduct from "./GetAllProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/GetAllProduct" element={<GetAllProduct />} />
        <Route path="/ProductItem" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
