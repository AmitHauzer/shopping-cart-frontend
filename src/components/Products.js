import { Container, Row } from 'react-bootstrap';
import { LoadingProducts } from './Loading/LoadingProducts';
import Product from "./Product"


function Products({ products, getCartItems, cartItems, cartId, path, isLoading }) {
    const isEmpty = products.length === 0;



    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Products</h1>
            <br />

            {isLoading ? (<LoadingProducts />) :

                (isEmpty ?
                    <Row sm={1} md={1} >
                        <img src={`${path}/static/images/no-product-found.png`} alt={'empty'} />
                    </Row>
                    :
                    <Row sm={1} md={4} className="g-4">
                        {products.map(product => <Product key={product.id} product={product} getCartItems={getCartItems} cartId={cartId} exist={!!cartItems.find(item => item.product.id === product.id)} path={path} />)}
                    </Row>
                )
            }
            <br></br>



        </Container >
    )
}

export default Products