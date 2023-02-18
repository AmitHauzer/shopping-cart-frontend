import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';


export const DeleteItem = ({ size = '20', itemId, cartId, getCartItems, path, className }) => {

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  const removeItemFromCart = async ({ productId, cartId }) => {
    await fetch(`${path}/cart/${cartId}/cartitems/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
    getCartItems()
  }

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={className}>
      {hovered ? <MdDelete size={size} onClick={() => removeItemFromCart({ productId: itemId, cartId: cartId })} /> : <RiDeleteBinLine size={size} />}
    </span>
  )
}
