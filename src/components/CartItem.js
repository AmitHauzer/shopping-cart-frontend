import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaShekelSign } from 'react-icons/fa';
import { DeleteItem } from './DeleteItem';


function CartItem({ item, cartId, path, getCartItems }) {
  const [quantity, setQuantity] = useState(item.quantity)

  useEffect(() => {
    // useEffect runs when the quantity is updated. 
    if (quantity !== item.quantity) {
      updateCartItem(quantity)
    }
  }, [quantity])


  const updateCartItem = async (newQuantity) => {
    let cartitem = {
      product: item.product.id,
      paid_status: item.paid_status,
      cart: cartId,
      quantity: newQuantity
    }
    await fetch(`${path}/cart/${cartId}/cartitems/${item.product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartitem)
    })
    getCartItems()
  }


  const hendleKeyDown = (event) => {
    // Solves the page refresh.
    if (event.key === 'Enter') {
      event.preventDefault();
    }

  }
  return (
    <Row className="bg-white square border rounded mb-0 shadow-sm p-3 m-3">
      <Col sm={4}>
        <img src={`${path}/static` + item.product.image} height={220} width={220} alt={item.product.name} />
      </Col>
      <Col sm={8}>
        <h4>{item.product.name} <DeleteItem className='float-end' getCartItems={getCartItems} path={path} itemId={item.product.id} cartId={cartId} /></h4>
        <p className='overflow-auto'>{item.product.description}</p>
        <form >
          <label htmlFor='quantity'>Quantity:</label>
          <input id='quantity' className='from-control ms-3' type='number' min={1} max={50} value={quantity} onKeyDown={hendleKeyDown} onChange={e => setQuantity(parseInt(e.target.value))} />
        </form>
        <br />
        <div className='fw-bold'>{item.product.price} <FaShekelSign size={'10px'} /></div>
      </Col>
    </Row >
  )
}

export default CartItem