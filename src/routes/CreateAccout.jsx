import React, { useContext } from "react";
import logo from "../routes/R.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../Contexts/LogInContext";
import { auth, createUserWithEmailAndPassword } from "../Firebase/firebase";

export default function CreateAccout() {
  const goTo = useNavigate();

  const {
    email,
    password,
    name,
    validity,
    setValidity,
    setEmail,
    setPassword,
    setName,
  } = useContext(AuthContex);

  const submitInfo = () => {
    if (email.includes("@") && password.trim().length >= 6) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setValidity(() => true);
          goTo("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidity(false);
        });
    } else {
      setValidity(false);
    }
  };

  const error = {
    fontSize: "0.7rem",
    color: "#c40000",
    margin: "1px 0px",
    marginLeft: "5px",
  };

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
            {validity === false && <span style={error}>Enter your name</span>}
            <strong>E-mail</strong>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            {validity === false && <span style={error}>Incorrect E-mail!</span>}
            <strong>Password</strong>
            <input
              type="password"
              placeholder="At least 6 charecters"
              onChange={(e) => setPassword(e.target.value)}
            />
            {validity === false && (
              <span style={error}>Password must contain 6 charecters</span>
            )}
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
