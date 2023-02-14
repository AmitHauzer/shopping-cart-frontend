import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from "./Product"


function Products({ products, getCartItems, cartItems, cartId, removeItemFromCart, path }) {
    const isEmpty = products.length === 0;
    return (
        <Container>
            <h1>Products:</h1>
            {
                isEmpty ?
                    <Row sm={1} md={1} >
                        <img src={`${path}/static/images/no-product-found.png`} />
                    </Row>
                    :
                    <Row sm={1} md={4} className="g-4">
                        {products.map(product => <Product key={product.id} product={product} getCartItems={getCartItems} removeItemFromCart={removeItemFromCart} cartId={cartId} exist={!!cartItems.find(item => item.product.id === product.id)} path={path} />)}
                    </Row>
            }
            <br></br>



        </Container >
    )
}

export default Products