import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/Cart';
import { MainHeader } from './components/MainHeader';
import { PageNotFound } from './components/PageNotFound';





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
      })
  }

  const getProducts = () => {
    fetch(`${path}/products/`)
      .then((response) => response.json())
      .then((allProducts) => {
        setProducts(allProducts)
        console.log(`Products: ${products}`)
      })
  }

  useEffect(() => {
    getProducts()
    getCartItems()
  }, [])


  const searchProducts = async (query) => {
    await fetch(`${path}/products/search/?search=${query}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((res) => { setProducts(res) })
  }

  return (
    <>
      <BrowserRouter>
        <MainHeader index={cartItems.length} path={path} searchProducts={searchProducts} getProducts={getProducts} />
        <Routes>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<Products products={products} getCartItems={getCartItems} getProducts={getProducts} cartItems={cartItems} cartId={cartId} path={path} />} />
          <Route path='/cart' element={<Cart getCartItems={getCartItems} cartitems={cartItems} cartId={cartId} path={path} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
