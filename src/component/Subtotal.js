import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'


function Subtotal() {
    const [{basket},dispatch]=useStateValue()
    return (
        <div>
            <CurrencyFormat
                  renderText={(value)=>(
                      <div>
                      <h5>Subtotal ({basket.length} Item):<strong>{value}</strong></h5>
                      </div>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"₹"}
                />            
        </div>
    )
}

export default Subtotal
