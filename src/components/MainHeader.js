import './MainHeader.css'
import Nav from './Nav'

export const MainHeader = ({ index, path, searchProducts, getProducts }) => {
  return (
    <div className='navbar'>
      <header>
        <h5>EasyShop</h5>
      </header>
      <Nav index={index} path={path} searchProducts={searchProducts} getProducts={getProducts} />
    </div>
  )
}
