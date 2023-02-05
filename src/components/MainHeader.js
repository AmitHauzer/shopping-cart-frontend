import './MainHeader.css'
import Nav from './Nav'

export const MainHeader = ({ index }) => {
  return (
    <div className='navbar'>
      <header>
        <h5>EasyShop</h5>
      </header>
      <Nav index={index} />
    </div>
  )
}
