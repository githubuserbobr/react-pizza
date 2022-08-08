import Header from './Components/Header';
import './scss/app.scss';
import React from 'react'
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart';

function App() { 
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/Cart" element={<Cart />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
