import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';




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
      <h1>Hello</h1>


      <Products products={products} />


    </>
  );
}

export default App;
