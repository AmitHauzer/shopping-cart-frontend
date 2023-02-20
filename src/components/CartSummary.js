import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { FaShekelSign } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


export const CartSummary = ({ cartitems, path, cartId, getCartItems }) => {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState()
    const initialValue = 0;

    useEffect(() => {
        const newTotalPrice = cartitems.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, initialValue);
        setTotalPrice(newTotalPrice)
    }, [cartitems])

    const checkOut = async () => {
        console.log('checkout')
        await fetch(`${path}/orders/${cartId}/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        getCartItems();
        navigateToProducts();
    }

    const navigateToProducts = () => {
        navigate("/products");
    }

    return (

        <Row className="bg-white square border rounded mb-0 shadow-sm p-3 m-3">
            <h4>Cart Summary</h4>

            <Col className="fw-bold">
                <div>Total Price:</div>
            </Col>
            <Col>
                <div className="fw-bold"><FaShekelSign size={'10px'} /> {parseFloat(totalPrice).toFixed(2)}</div>
            </Col>
            <div className="d-grid pt-3"><Button className="shadow-sm" variant="success" onClick={checkOut}>Checkout</Button></div>
        </Row >

    )
}
