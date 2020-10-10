import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="3"
                    title="AmazonBasics 12-Sheet Cross-Cut Paper, CD and Credit Card Shredder"
                    price={10.51}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="4"
                    title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                    price={64.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="5"
                    title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
                    price={454.90}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SX679_.jpg"
                />
                <Product 
                    id="6"
                    title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control and QoS"
                    price={62.13}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SX679_.jpg"
                />
                <Product 
                    id="7"
                    title="PlayStation 4 Pro 1TB Console"
                    price={468.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="8"
                    title="AmazonBasics 12-Sheet Cross-Cut Paper, CD and Credit Card Shredder"
                    price={10.51}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
