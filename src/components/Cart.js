import { Container, Row, Col } from 'react-bootstrap'
import CartItem from './CartItem'
import { BsCart3 } from 'react-icons/bs';
import { CartSummary } from './CartSummary';

function Cart({ cartitems, removeItemFromCart, cartId, path, getCartItems }) {
  return (
    <Container >
      <Row>
        <h1 style={{ textAlign: 'center' }}>Cart <BsCart3 /></h1>
        <Col sm={8}>
          {cartitems.map((item) => <CartItem key={item.id} item={item} removeItemFromCart={removeItemFromCart} getCartItems={getCartItems} cartId={cartId} path={path} />)}
        </Col>
        <Col sm={4}>
          <CartSummary cartitems={cartitems} />
        </Col>
      </Row>
    </Container>
  )
}

export default Cart