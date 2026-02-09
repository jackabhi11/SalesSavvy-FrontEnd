import React from 'react'

function ProductCard({product}) {

    return (
        
            <div className="product_card new_layout">
            <div className="product_top">
                <div className="product_image">
                <img
                    src={product.photo}
                    alt="Product"
                />
                </div>

                <div className="product_basic_info">
                <h3 className="product_name">{product.name}</h3>

                <div className="product_action">
                    <span className="product_price">₹{product.price}</span>
                    <button className="add_to_cart_btn">Add to Cart</button>
                </div>
                </div>
            </div>

            <div className="product_description">
                {product.description}
            </div>
            </div>


    )
}

export default ProductCard
