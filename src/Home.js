import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDdhM2JmYjct/NDdhM2JmYjct-ZTVlOTUzMmUt-w1500._CB668762222_.jpg" 
                alt="" 
            />

            <Product 
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                alt="The Lean Startup Paperback Book"
                image="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0307887898&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=melaniepanem-20"
            />
        </div>
    );
}

export default Home;
