import React from 'react'
import Header from '../Layouts/Header'
import logo from "../routes/R.png"
export default function SignInPage() {
  return (
    <>
    <Header />
    <main style={{background:'white', height:'87.5vh'}}>
      <div className='main-form'>
        <div className='logo-form'>
          <img src={logo} />
        </div>
        <div className='form'>
           <h1>Sign-in</h1>
           <strong>E-mail</strong>
           <input type="text" />
           <strong>Password</strong>
           <input type="text" />
           <button>Sign in</button>
           <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
           <button>Create your Amazon account</button>
        </div>
      </div>
    </main>
    </>
  )
}
