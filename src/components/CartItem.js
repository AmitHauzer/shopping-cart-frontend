import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';


function CartItem({ item, index, removeItemFromCart, cartId, path, getCartItems }) {
  const [quantity, setQuantity] = useState(item.quantity)


  // useEffect runs when the quantity is updated. 
  useEffect(() => {
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
    console.log('test')
  }


  const hendleKeyDown = (event) => {
    // Solves the page refresh.
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('enter')
    }

  }
  return (
    <tr >
      <th>{index + 1}</th>
      <td>
        <img src={`${path}/static` + item.product.image} alt={item.product.name} width='200px' />
      </td>
      <td>{item.product.name}</td>
      <td>{item.product.description}</td>
      <td>{item.product.price}</td>
      <td>
        <form>
          <input className='from-control' type='number' min={1} max={50} value={quantity} onKeyDown={hendleKeyDown} onChange={e => setQuantity(parseInt(e.target.value))} />
        </form>
      </td>
      <td>{parseFloat(item.product.price * item.quantity).toFixed(2)}</td>
      <td><MdDelete size={20} onClick={() => removeItemFromCart({ productId: item.product.id, cartId: cartId })} /></td>
    </tr>
  )
}

export default CartItem