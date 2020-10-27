import React from 'react'
import "../style/Home.css"
import ProductCard from "./ProductCard"

//React-flip-toolkit animation

function Home() {
    return (
        <div className="Home">
            <img className="HomeBackground" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg"/>
            <div className="HomeProductContainer">
                <ProductCard
                id="1"
                name="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION) Hardcover – 1 December 2019"
                src="https://images-na.ssl-images-amazon.com/images/I/9138VXjBfPL.jpg"
                price={380}
                rating={4}/>
                <ProductCard
                id="2"
                name="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
                src="https://images-na.ssl-images-amazon.com/images/I/71tt%2BZeOw%2BL._SL1500_.jpg"
                price={94990}
                rating={5}/>
                <ProductCard
                id="3"
                name="
                ASUS ROG Gaming Phone 3-6.59” FHD+ 2340x1080 HDR 144Hz Display - 6000mAh Battery - 64MP/13MP/5MP Triple Camera with 24MP Front Camera - 512GB Storage"
                src="https://images-na.ssl-images-amazon.com/images/I/71wU-upLWbL._AC_SL1500_.jpg"
                price={15000}
                rating={4}/>
                <ProductCard
                id="4"
                name="NewAir AB-1200 126 Can Freestanding Beverage Fridge in Stainless Steel with Glass Door and Adjustable Shelves"
                src="https://images-na.ssl-images-amazon.com/images/I/71QXqnxOb0L._AC_SL1200_.jpg"
                price={12000}
                rating={3}/>
            </div>
            
        </div>
    )
}

export default Home
