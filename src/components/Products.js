import { Container, Row } from 'react-bootstrap';
import Product from "./Product"


function Products({ products, getCartItems, cartItems, cartId, removeItemFromCart }) {
    return (
        <Container>
            <h1>Products:</h1>
            <Row sm={1} md={4} className="g-4">
                {products.map(product => <Product key={product.id} product={product} getCartItems={getCartItems} removeItemFromCart={removeItemFromCart} cartId={cartId} exist={!!cartItems.find(item => item.product.id === product.id)} />)}
            </Row>
        </Container>
    )
}

export default Products