import { Link } from 'react-router-dom';
import './Nav.css';
import { BsCart3 } from 'react-icons/bs';
import { Badge } from 'react-bootstrap';
import Search from './Search';

function Nav({ index, searchProducts, getProducts }) {
  return (
    <nav className='shadow-sm'>
      <ul>
        <li><Link to='/products' onClick={getProducts}>Products</Link></li>
        <li ><Link to='/cart'><BsCart3 className='icon' /><Badge bg="secondary">{index}</Badge></Link></li>
      </ul>

      <div className="right">
        {/* <div>{window.location.href.split('/').map(a => <span>{a}</span>)} && {path}/products </div> */}
        <Search searchProducts={searchProducts} />

      </div>
    </nav >
  )
}

export default Nav