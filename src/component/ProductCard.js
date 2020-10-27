import React, { useState } from 'react'
import "../style/ProductCard.css"
import { FaStar } from "react-icons/fa";
import { useStateValue } from './StateProvider'
function ProductCard({id,name,price,src, rating}) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket = () =>{
        //Dispatch item to data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,
                name,
                price,
                src,
                rating,
            },
        })
    }
    return (
        <div className="ProductCard">
            <div className="ProductDetail">
            <h5 className="ProductHeading">{name}</h5>
            <h5><strong>₹{price}</strong></h5>
            <div className="Rating">
            {
                Array(rating)
                .fill()
                .map((_,i)=>(
                    <FaStar/>
                ))
            }
            </div>
            </div>
            <div className="Image">
            <img src={src} alt={name}/>
            </div>
            <div className="Image">
                <button onClick={addToBasket}>Add to cart</button>
            </div>

            
        </div>
    )
}

export default ProductCard
