import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Home from './components/Home';





function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  // const [userCart, setUserCart] = useState()



  useEffect(() => {
    fetch('http://localhost:8000/products/')
      .then((response) => response.json())
      .then((allProducts) => {
        setProducts(allProducts)
        console.log(`Products: ${products}`)
      })
  }, [])


  useEffect(() => {
    fetch('http://localhost:8000/cart/cartitems/1/')
      .then((response) => response.json())
      .then((allCartitems) => {
        setCartItems(allCartitems)
        console.log(`CartItems: ${cartItems}`)
      })
  }, [])


  return (
    <>
      <h1>EasyShop</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path='/cart' element={<Cart cartitems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
