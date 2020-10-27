import React from 'react'
import "../style/Checkout.css"
import CheckoutProductCard from "./CheckoutProductCard"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
import {useHistory} from 'react-router-dom'

function Checkout() {
    const history=useHistory()
    const [{basket,user},dispatch] = useStateValue()
    return (
        <div className="Checkout">
            <div className="CartDetail">
                {
                    user?(<div>
                        <h3>Hello, </h3>
                        <h5>{user.email}</h5>
                    </div>):(<></>)
                }
                <h4><strong>Shopping Cart</strong></h4>
                {
                    basket.length!==0?(
                        basket.map(({ id, name, src, price, rating }) => (
                            <CheckoutProductCard
                            name={name}
                            id={id}
                            src={src}
                            price={price}
                            rating={rating}
                            />
                            ))
                    ):(<div><h4 style={{"padding":"10px"}}>Cart Empty</h4></div>)
                }
            </div>
            <div className="CartAmount">
                <div className="CartAmountContainer">
                    <Subtotal/>         
                <div className="Image">
                {
                    basket.length>0?(
                        <button onClick={e=>history.push('/payment')}>Proceed to buy</button>
                    ):(<></>)
                }
                </div>
                </div>
            </div>        
        </div>
    )
}

export default Checkout
