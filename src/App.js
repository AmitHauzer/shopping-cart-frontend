import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';




function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://shoppingcart-tluz.onrender.com/products/')
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
      {/* {products.map(p => <div>{p.name}</div>)} */}


    </>
  );
}

export default App;
