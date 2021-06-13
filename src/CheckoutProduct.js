import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <strong><small>$</small>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>

                {/* <button onClick={RemoveFromBasket}>Remove from basket</button> */}
            </div>
        </div>
    )
}

export default CheckoutProduct;
