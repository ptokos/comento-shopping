
import {BrowserRouter,Route, Route } from 'react-router-dom';
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Basket from "./pages/Basket"

import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route path="/Basket" element={<Basket/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
