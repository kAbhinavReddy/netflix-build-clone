import React from 'react'
import  { useState } from "react";
import TypingEffect from './TypingEffect';
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';
export default function LoginScreen() {
 
const h1p="Unlimited films, TV programmes and more."

const [singIn,setSignIn]=useState(false)

  return (
    <div className="loginScreen">
        <div className="loginScreen_background">
        <img className="loginScreen__logo" 
        src="https://about.netflix.com/images/logo.png"
        alt=""/>
        <button onClick={()=>setSignIn(true)} className="loginScreen__button">Sign In</button>

        <div className="loginScreen__gradient"/>
        </div>
        <div className="loginScreen__body">
          {singIn?(<SignUpScreen/>):(
            <div>
            <>
         <h1><TypingEffect text={h1p} speed={100} /></h1>
         
         </>
         <h2>Watch anywhere. Cancel at any time.</h2>
       <h3>Ready to watch Enter your email to create or restart your membership.</h3>
          <div className="loginScreen__input">
           <form>
             <input type="email" placeholder="Email address"/>
              <button onClick={()=>setSignIn(true)} className="loginScreen__getstarted">GET STARTED</button>
           </form>
          </div>
          </div>
          )}
          
        
        </div>
        

    </div>
  )
}
