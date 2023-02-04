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
  const [cartId, setCartId] = useState(1)

  function onRefresh() {
    fetch(`http://localhost:8000/cart/cartitems/${cartId}/`)
      .then((response) => response.json())
      .then((allCartitems) => {
        setCartItems(allCartitems)
        console.log(`CartItems: ${cartItems}`)
      })
  }

  useEffect(() => {
    fetch('http://localhost:8000/products/')
      .then((response) => response.json())
      .then((allProducts) => {
        setProducts(allProducts)
        console.log(`Products: ${products}`)
      })

    onRefresh() // get the cart items.
  }, [])


  return (
    <>
      <h1>EasyShop</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<Products products={products} onRefresh={onRefresh} cartItems={cartItems} cartId={cartId} />} />
          <Route path='/cart' element={<Cart cartitems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
