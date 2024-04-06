import React, { useContext } from "react";
import { AuthContex } from "../Contexts/Contexts";
import { Link, useNavigate } from "react-router-dom";
import logo from "../routes/R.png";

// import { useEffect, useReducer } from "react";
// const reducer = (state, action)=>{
//   switch(action.type){
//     case 'change_email':{
//       return{
//        ...state, email:action.newEmail
//       }
//     }
//     case 'change_password':{
//       return{
//         ...state, password:action.newPassword
//        }
//     }
//     case 'change_validity':{
//      return{
//       ...state, isValid: !state.isValid
//      }
//     }
//   }
// }

export default function SignInPage() {
  // const initialStates ={
  //   email:'',
  //   password:'',
  //   isValid: false
  // }
  // const [state, dispatch] = useReducer(reducer, initialStates);

  // useEffect(()=>{
  //   const valid = localStorage.getItem('valid')
  //   const time = setTimeout(()=>{
  //     console.log('hey')
  //     {(state.email.includes('@') && state.password.trim().length >= 6) && state.isvalid === true}
  //   }, 10000)

  //   return ()=>{
  //    {valid && dispatch({type:'change_validity'})}
  //    clearTimeout(time)
  //   }
  // },[state.email, state.password])

  // const changeEmail = (e)=> {dispatch({type:'change_email', newEmail: e.target.value });}
  // const changePassword = (e)=> {dispatch({type: 'change_password', newPassword: e.target.value});}

  const {
    email,
    password,
    auth,
    validity,
    setAuth,
    setEmail,
    setPassword,
    setValidity
  } = useContext(AuthContex);
  const goTo = useNavigate();

  const submitInfo = () => {
    // dispatch({type:'change_validity'})
    // localStorage.setItem('valid', 1);
    // console.log(state.email +'  '+ state.password)

    if (email.includes("@") && password.trim().length >= 6) {
      setValidity(() => true);
      setAuth((prev) => !prev);
      goTo("/");
    } else {
      setValidity(false);
    }



    // console.log(email, password);

  };

  console.log("valid", validity);

  return (
    <>
      <main style={{ background: "white", height: "100vh" }}>
        <div className="main-form">
          {/* {state.isValid && <div><button onClick={handleLogOut}>log-out</button></div>} */}

          <div className="logo-form">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="form">
            <h1>Sign-in</h1>
            <strong>E-mail</strong>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <strong>Password</strong>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submitInfo}>Sign in</button>
            <p>
              By continuing, you agree to Amazon's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice.</span>
            </p>
            <div className="or">
              <div className="line"></div>
              <span>New to Amazon?</span>
              <div className="line"></div>
            </div>
            <Link to="/register">
              <button>Create your Amazon account</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
