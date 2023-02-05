import { Link } from 'react-router-dom'
import './Nav.css'
import { BsCart3 } from 'react-icons/bs'
import { Badge } from 'react-bootstrap'

function Nav({ index }) {
  return (
    <nav>
      <ul>
        {/* <li><Link to='/'>Home</Link></li> */}
        <li><Link to='/products'>Products</Link></li>
        <li ><Link to='/cart'><BsCart3 className='icon' /><Badge bg="secondary">{index}</Badge></Link></li>
      </ul>
      <div className="right">
        <a href="#">
          {/* <FontAwesomeIcon icon="fas fa-shopping-cart" /> */}
          {/* <i class="fa fa-shopping-cart"></i> */}


          <i className="glyphicon glyphicon-cart"></i>
        </a>
      </div>
    </nav >
  )
}

export default Nav