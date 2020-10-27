import React from 'react'
import "../style/CheckoutProductCard.css"
import { FaStar } from "react-icons/fa";
import {useStateValue} from "./StateProvider"
function CheckoutProductCard({id,name,price,src,rating}) {
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id,
        })
    }
    return (
        <div className="CheckoutProductCard">

            <img className="ProductImage" src={src}/>
            <div className="ProductDetail">
                <h5>{name}</h5>
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
                <button onClick={removeFromBasket}>Delete</button>
            </div>        
        </div>
    )
}
export default CheckoutProductCard
