import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductDetail from './componenets/ProductDetail';
import ProductList from './componenets/ProductList';
  
import './App.css';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
   
  );
};

export default App;
