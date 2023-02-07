import { Link } from 'react-router-dom'
import './Nav.css'
import { BsCart3 } from 'react-icons/bs'
import { Badge } from 'react-bootstrap'

function Nav({ index }) {
  return (
    <nav className='shadow-sm'>
      <ul>
        <li><Link to='/products'>Products</Link></li>
        <li ><Link to='/cart'><BsCart3 className='icon' /><Badge bg="secondary">{index}</Badge></Link></li>
      </ul>

      <div className="right">
        <a href="#">
          insert search function
        </a>
      </div>
    </nav >
  )
}

export default Nav