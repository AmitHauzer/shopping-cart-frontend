import { Container, Row, Col } from 'react-bootstrap'
import CartItem from './CartItem'
import { BsCart3 } from 'react-icons/bs';
import { CartSummary } from './CartSummary';

function Cart({ cartitems, removeItemFromCart, cartId, path, getCartItems }) {
  return (
    <Container >
      <h1 style={{ textAlign: 'center' }}>Cart <BsCart3 /></h1>
      {
        cartitems.length != 0 ?
          <Row>
            <Col sm={8}>
              {cartitems.map((item) => <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart} getCartItems={getCartItems} cartId={cartId} path={path} />)}
            </Col>
            <Col sm={4}>
              <CartSummary cartitems={cartitems} path={path} cartId={cartId} getCartItems={getCartItems} />
            </Col>
          </Row>
          :
          <Row>
            <div style={{ textAlign: 'center' }}>
              <br />
              <br />
              <img src={`${path}/static/images/empty_cart.png`} height={500} width={500} alt={'empty'} />
            </div>
          </Row>
      }

    </Container >
  )
}

export default Cart