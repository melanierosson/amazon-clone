import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, alt }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };

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
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    );
}

export default Product;
