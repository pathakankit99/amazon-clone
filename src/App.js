import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from  './component/Header'
import Home from './component/Home'
import Checkout from './component/Checkout'
import SignIn from './component/SignIn'
import Payment from './component/Payment'
import { auth } from './firebase';
import { useStateValue } from './component/StateProvider';

function App() {
  const [{},dispatch]=useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
    
  }, [])
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/">
        <Header/>
          <Home/>
        </Route>
        <Route exact path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route exact path="/payment">
        <Header/>
        <Payment/>          
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

//API Key: rzp_test_5OyEP2ivUQHvJ8
//API Secret: fZfHCjg3FXWwtoCsZP3Eg7nB