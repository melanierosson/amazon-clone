import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutAdImg from './images/checkout-ad.png';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src={CheckoutAdImg} alt="" className="checkout__ad"/>
                {basket?.length === 0 ? (
                    <div>
                        <h2 className="checkout__titleEmpty">Your Shopping Basket is empty</h2>
                        <p className="checkout__subtitle">
                            You have no items in your basket. To buy one or "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket?.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    );
}

export default Checkout;
