import Header from "./Components/Header";
import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
      <div className="wrapper">
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Routes>
          <Route
            path="/"
            element={<Home 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Pagination />
      </div>
  );
}

export default App;
