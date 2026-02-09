import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProductHome() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CustomerHome/Products')
    }

    return (
        <div className="hero_section">
                <span className="hero_tag">✨ Smart Shopping Starts Here</span>

                <h1 className="hero_heading">
                    Everything You Need, <br />
                    One Smart Store
                </h1>

                <p>
                    Discover high-quality products at unbeatable prices.
                    Enjoy fast delivery, secure payments, and easy returns.
                </p>

                <div className="hero_btn_group">
                    <button className="primary_btn" onClick={handleClick}>Explore Products</button>
                    <button className="secondary_btn" onClick={handleClick}>View Deals</button>
                </div>

                <div className="hero_features">
                    <div>🚚 Fast Delivery</div>
                    <div>🔒 Secure Payments</div>
                    <div>↩️ Easy Returns</div>
                </div>
        </div>
    )
}

export default ProductHome
