

function Product({ product }) {
    return (
        <div>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
            <img src={'http://localhost:8000/static' + product.image} alt={product.name} />
        </div>
    )
}

export default Product