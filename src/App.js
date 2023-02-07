import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/Cart';
import { MainHeader } from './components/MainHeader';





function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartId, setCartId] = useState(1)

  const getCartItems = () => {
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

    getCartItems()
  }, [])

  const removeItemFromCart = async ({ product, cartId }) => {
    let item = {
      product: product.id,
      cart: cartId,
    }
    await fetch(`http://localhost:8000/cart/cartitems/1/delete/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
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
          <Route path="/products" element={<Products products={products} getCartItems={getCartItems} removeItemFromCart={removeItemFromCart} cartItems={cartItems} cartId={cartId} />} />
          <Route path='/cart' element={<Cart removeItemFromCart={removeItemFromCart} cartitems={cartItems} cartId={cartId} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
