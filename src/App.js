import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/Cart';
import { MainHeader } from './components/MainHeader';





function App() {
  const path = "http://localhost:8000"
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartId, setCartId] = useState(1)


  const getCartItems = () => {
    fetch(`${path}/cart/${cartId}/cartitems/`)
      .then((response) => response.json())
      .then((allCartitems) => {
        setCartItems(allCartitems)
        console.log(`CartItems: ${cartItems}`)
      })
  }


  useEffect(() => {
    fetch(`${path}/products/`)
      .then((response) => response.json())
      .then((allProducts) => {
        setProducts(allProducts)
        console.log(`Products: ${products}`)
      })
    getCartItems()
  }, [])


  const removeItemFromCart = async ({ productId, cartId }) => {

    await fetch(`${path}/cart/${cartId}/cartitems/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
    console.log('remove.')
    getCartItems()
  }


  return (
    <>
      <BrowserRouter>
        <MainHeader index={cartItems.length} />
        <Routes>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<Products products={products} getCartItems={getCartItems} removeItemFromCart={removeItemFromCart} cartItems={cartItems} cartId={cartId} path={path} />} />
          <Route path='/cart' element={<Cart removeItemFromCart={removeItemFromCart} getCartItems={getCartItems} cartitems={cartItems} cartId={cartId} path={path} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
