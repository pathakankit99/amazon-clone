import React, { useState } from 'react'
import "../style/SignIn.css"
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'

function SignIn() {
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [user,setUser]=useState(null)
    const history=useHistory()
    const signin=(e)=>{
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const register=(e)=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.pushState('/')
            }
        })
        .catch(error=>alert(error.message))
    

    }
    return (
        <div className="SignIn">
            <div className="FormOuterContent">
            <div className="Image">
            <Link to="/">
            <img src="https://sybergaming.com/wp-content/uploads/2019/03/amazon-logo.png"
            alt="LOGO"/>
            </Link>
            </div>
            <form>
            <div className="Form">
                <div className="FormContent">
                <h2>Sign In</h2>
                <h5>E-mail</h5>
                <input
                name="Email"
                type="text"
                value={email}
                onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input
                type="Password"
                name="Password"
                value={password}
                onChange={e=>setPassword(e.target.value)}/>
                <div className="Image">
                <button type="submit" onClick={signin}>Sign In</button>
                </div>
                <h5>
                    By Signing-in you agre to Amazon's conditions of use and sale.
                    Please see our privacy notice, our cookies notics and our interest based ads notice.
                </h5>
                <div className="Image">
                <button onClick={register}>Sign Up</button>
                </div>
                </div>
            </div>
            </form>
            </div>
            
        </div>
    )
}

export default SignIn
