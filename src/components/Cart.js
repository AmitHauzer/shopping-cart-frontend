import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import CartItem from './CartItem'

function Cart({ cartitems }) {
  return (
    <Container>
      <Row>
        <div>
          <h1>Cart</h1>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>

            </thead>
            <tbody>
              {cartitems.map((item, index) => <CartItem key={item.id} item={item} index={index} />)}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  )
}

export default Cart