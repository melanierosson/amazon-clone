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
            <div className="home__row">
                <Product 
                    id="12321341"
                    title="Lobster Claw Oven Mitt - Gag Gift For a Shellfish Lover - Fun Kitchen Accessory"
                    price={9.96}
                    rating={5}
                    alt="Lobster Claw Oven Mitt"
                    image="https://images-na.ssl-images-amazon.com/images/I/51SX8KTOZrS._AC_SY1000_.jpg"
                />
                <Product 
                    id="12321234"
                    title="Unicorn Popper Toy - 6 Rainbow Balls Included - Kid's or Prank Gift - Stress Reducer"
                    price={13.66}
                    rating={3}
                    alt="Unicorn Rainbow Ball Popper Toy"
                    image="https://images-na.ssl-images-amazon.com/images/I/41CTAat3tpL._AC_SY1000_.jpg"
                />
                
            </div>
            <div className="home__row">
                <Product 
                    id="12321328"
                    title="Canned Unicorn Meat Lunch Spread Gag Gift!"
                    price={11.96}
                    rating={5}
                    alt="Canned Unicorn Meat Lunch Spread"
                    image="https://images-na.ssl-images-amazon.com/images/I/91Ve0ydEERL._AC_SY550_.jpg"
                />
                <Product 
                    id="12671341"
                    title="T-Rex Dinosaur Head Lunch Box - Kid's Lunch - Children's Toy"
                    price={16.99}
                    rating={4}
                    alt="T-Rex Dinosaur Head Lunch Box"
                    image="https://images-na.ssl-images-amazon.com/images/I/81bXoNIFFHL._AC_SX425_.jpg"
                />
                <Product 
                    id="76821341"
                    title="Wacky Waving Inflatable Tube Guy - Desktop Miniature - Red"
                    price={17.49}
                    rating={5}
                    alt="Wacky Waving Inflatable Tube Guy"
                    image="https://images-na.ssl-images-amazon.com/images/I/41u-Wr-UpIL._AC_SY1000_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12323471"
                    title="Pizza Socks Box - Pepperoni - 4 pairs - Unisex"
                    price={19.99}
                    rating={4}
                    alt="Pepperoni Pizza Socks Box"
                    image="https://images-na.ssl-images-amazon.com/images/I/91DVUFIdeGL._AC_UY780_.jpg"
                />
                <Product 
                    id="12323551"
                    title="Miniature Cereal Freeze-Dried Marshmallows - Fun, Sweet, and Delicious"
                    price={19.99}
                    rating={4}
                    alt="Miniature Cereal Marshmallows"
                    image="https://images-na.ssl-images-amazon.com/images/I/51DPsalQt-L._AC_SY580_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
