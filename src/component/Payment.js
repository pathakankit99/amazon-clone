import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import CheckoutProductCard from "./CheckoutProductCard"
import Subtotal from "./Subtotal"

async function DisplayRazorpay(user, basket){
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
        alert('Razorpay SDK failed to load. Are you Online?')
        return
    }
    var _dev_
    if(document.domain==='localhost')
    {
        _dev_=true//development
    }
    else{
        _dev_=false//production
    }
    const amount=getBasketTotal(basket);
    console.log(amount)

    const data = await fetch('http://localhost:5000/razorpay',{
        method:'post',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount
        }),
    })
    .then((doc)=>doc.json())
    var options = {
        key: _dev_?'rzp_test_5OyEP2ivUQHvJ8':'API_NA', // Enter the Key ID generated from the Dashboard
        amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or 500Rs
        currency: data.currency,
        name: "Amazon",
        description: "Test Transaction",
        image: "https://sybergaming.com/wp-content/uploads/2019/03/amazon-logo.png",
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        prefill: {
            name: user.name,
            email: user.email
        },
        notes: {
            address: "Razorpay Corporate Office"
        }
    };
    const payment = new window.Razorpay(options)
    payment.open()
}

function loadScript(src){
    return new Promise(resolve=>{
        const script=document.createElement('script')
        script.src=src
        script.onload=()=>{
            resolve(true)
        }
        script.onerror = () =>{
            resolve(false)
        }
        document.body.appendChild(script)
    })    
}

function Payment() {
    const history=useHistory()
    const [{basket,user},dispatch] = useStateValue()
    return (
        <div className="Payment">
            <div className="PaymentContent">
                <h2>Checkout</h2>
                <div className="PaymentDetail">
                    <div className="DeliveryAddress">
                        <div className="Part1">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="Part2">
                            <h5>Railway colony, bagdogra</h5>
                            <h5>734014</h5>
                        </div>
                    </div>
                    <div className='OrderDetail'>
                        <div className="Part1">
                            <h3>Review Order Details</h3>
                        </div>
                        <div className="Part2">
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
                    </div>
                    <div className="PaymentMethod">
                        <div className="Part1">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="Part2">
                            <h4>Card Details</h4>
                            <Subtotal/> 
                            {
                                basket?(
                                    <div>
                                        <button onClick={()=>DisplayRazorpay(user,basket)}>Buy Now</button>
                                    </div>
                                ):(<></>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    )
}

export default Payment