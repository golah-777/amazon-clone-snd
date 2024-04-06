import React, { useReducer, useContext } from "react";
import logo from "../routes/R.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../Contexts/Contexts";

// const reducer = (state, action)=>{
//   switch(action.type){
//     case 'change_name':{
//       return {
//         ...state ,name: action.newName
//       }
//     }
//     case 'change_email':{
//       return {
//         ...state ,email: action.newEmail
//       }
//     }
//     case 'change_password':{
//       return {
//         ...state , password: action.newPassword
//       }
//     }
//     case 'valid':{
//       return {
//        ...state, isValid: !state.isValid
//       }
//     }
//     default:
//       return state;

//   }
// }

export default function CreateAccout() {
  // const initialStates = {
  //  name:'',
  //  email: '',
  //  password: '',
  //  isValid: false
  // }
  // const [state, dispatch] = useReducer(reducer, initialStates);

  // const handleName = (e)=> dispatch({type:'change_name', newName: e.target.value})
  // const handleEmail = (e)=>dispatch({type:'change_email', newEmail: e.target.value})
  // const handlePassword = (e)=>dispatch({type:'change_password', newPassword: e.target.value})

  const {
    email,
    password,
    auth,
    name,
    validity,
    setValidity,
    setAuth,
    setEmail,
    setPassword,
    setName,
  } = useContext(AuthContex);
  
  const goTo = useNavigate();
  const submitInfo = () => {
    if (email.includes("@") && password.trim().length >= 6) {
      setValidity(() => true);
      setAuth((prev) => !prev);
      goTo("/");
    } else {
      setValidity(false);
    }
    // dispatch({type:'valid'})
    // console.log(state.isValid)
    
  };

  console.log(email, password, name, validity);

  return (
    <>
      <main style={{ background: "white", height: "100vh" }}>
        <div className="main-form">
          <div className="logo-form">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="form">
            <h1>Create account</h1>
            <strong>Your Name</strong>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <strong>E-mail</strong>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <strong>Password</strong>
            <input
              type="text"
              placeholder="At least 6 charecters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span style={{ fontSize: ".7rem", marginBottom: "10px" }}>
              Password must be at least 6 charecters
            </span>
          
              <button onClick={submitInfo}>Continue</button>
            
            <p>
              By continuing, you agree to Amazon's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice.</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
