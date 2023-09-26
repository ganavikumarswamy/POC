import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import TodoList from './component/TodoList';
import Headers from "./component/Headers";
import OnlineShoping from "./component/OnlineShoping";
import ContexCart from "./component/ContexCart";
// import CartContext from "./ShopingContex";

function App() {
  return (
    <div>
      <Headers />

      <Routes>
        <Route path="OnlineShoping" element={<OnlineShoping />} />
        <Route path="ContexCart" element={<ContexCart />} />
      </Routes>
    </div>
  );
}

export default App;
