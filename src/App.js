import Header from "./Components/Header";
import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import context from "./API/Context/Context";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  // const [totalCount, setTotalCount] = React.useState(null)
  // console.log(currentPage)
  return (
    <context.Provider value={[currentPage, setCurrentPage]}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home currentPage={currentPage} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
      </div>
    </context.Provider>
  );
}

export default App;
