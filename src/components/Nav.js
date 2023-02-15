import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import { BsCart3 } from 'react-icons/bs';
import { Badge } from 'react-bootstrap';
import Search from './Search';

function Nav({ index, searchProducts, getProducts }) {
  const location = useLocation();
  const isProductUrl = location.pathname === '/products';
  return (
    <nav className='shadow-sm'>
      <ul>
        <li><Link to='/products' onClick={getProducts}>Products</Link></li>
        <li ><Link to='/cart'><BsCart3 className='icon' /><Badge >{index}</Badge></Link></li>
      </ul>

      <div className="right" style={{ width: '20%' }}>
        {isProductUrl && <Search searchProducts={searchProducts} />}
      </div>
    </nav >
  )
}

export default Nav