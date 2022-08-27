import Header from "./Components/Header";
import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import context from "./API/Context/Context";

function App() {
  // TODO сделать сортировку через навигацию
  return (
    <context.Provider value={null}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
