import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { FaShekelSign } from 'react-icons/fa';


export const CartSummary = ({ cartitems }) => {
    const [totalPrice, setTotalPrice] = useState()
    const initialValue = 0;

    useEffect(() => {
        const newTotalPrice = cartitems.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, initialValue);
        setTotalPrice(newTotalPrice)
    }, [cartitems])

    return (

        <Row className="bg-white square border rounded mb-0 shadow-sm p-3 m-3">
            <h4>Cart Summary</h4>

            <Col className="fw-bold">
                <div>Total Price:</div>
            </Col>
            <Col>
                <div className="fw-bold">{parseFloat(totalPrice).toFixed(2)} <FaShekelSign size={'10px'} /></div>
            </Col>
            <div className="d-grid pt-3"><Button className="shadow-sm" variant="success">Checkout</Button></div>
        </Row >

    )
}
