import React from 'react'
import '../../style/AdminProductCompo.css'

function ShowProduct(props) {
    const product = props.product;
    return (
            <div className="product-card">
            
            <div className="product-image">
                <img src={product.photo} alt={product.name} />
            </div>

            <div className="product-details">
                
                <h4 className="product-title">{product.name}</h4>

                <div className="product-meta">
                <span className="price">₹{product.price}</span>
                <span className="category">{product.category}</span>
                <span className="id">ID: {product.id}</span>
                </div>

                <p className="product-description">{product.description}</p>

            </div>

            </div>

    )
}

export default ShowProduct
