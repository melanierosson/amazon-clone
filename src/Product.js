import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating, alt }) {
    return (
        <div className="product">
            <div class="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small><strong>${price}</strong></small>
                </p>
                <div className="product__rating">
                    { Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            
            <img 
                className="product__image"
                src={image}
                alt={alt}
            />
            <button>Add To Basket</button>
        </div>
    );
}

export default Product;
