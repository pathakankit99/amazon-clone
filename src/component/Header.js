import React from 'react'
import "../style/Header.css"
import {Link} from "react-router-dom"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue()
    console.log(user)
    const handleSignOut=()=>{
        auth.signOut()
    }
    return (
        <div className="Navbar">
            <Link to="/">
            <img className="HeaderLogo" src="https://sybergaming.com/wp-content/uploads/2019/03/amazon-logo.png" />
            </Link>
            <div className="SearchBox">
            <input placeholder="Search..."/>
            <div className="IconBox">
            <FaSearch/>
            </div>
            </div>
            <div className="NavOption">
                {
                    user?(
                        <>
                        <span style={{"cursor":"pointer"}} onClick={handleSignOut}><strong>Sign Out</strong></span>
                        </>
                    ):(
                        <>
                            <span>Hello Guest</span>
                        <Link to="/login">
                        <span><strong>Sign in</strong></span>
                        </Link>
                        </>
                    )
                }
            </div>
            <div className="NavOption">
                <span>Returns</span>
                <span><strong>Orders</strong></span>
            </div>
            <Link to="/checkout">
            <div className="cart NavOption">
                <FaShoppingCart />
                {basket?.length}
            </div>
            </Link>
        </div>
    )
}

export default Header
