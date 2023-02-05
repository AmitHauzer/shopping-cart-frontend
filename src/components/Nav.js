import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
      <div className="right">
        <a href="#">
          {/* <FontAwesomeIcon icon="fas fa-shopping-cart" /> */}
          {/* <i class="fa fa-shopping-cart"></i> */}
          <i className="glyphicon glyphicon-cart">testttt</i>
        </a>
      </div>
    </nav >
  )
}

export default Nav