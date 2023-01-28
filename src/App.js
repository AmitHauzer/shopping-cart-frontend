import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './components/Cart';




function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/products/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        console.log(data)
      })
  }, [])


  return (
    <>
      <h1>Shop</h1>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/products" element={<Products products={products}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
