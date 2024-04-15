import React, { useContext } from "react";
import { AuthContex } from "../Contexts/LogInContext";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../Firebase/firebase";
import logo from "../routes/R.png";

export default function SignInPage() {
  const goTo = useNavigate();

  const { email, password, validity, setEmail, setPassword, setValidity } =useContext(AuthContex);

  const submitInfo = () => {
    if (email.includes("@") && password.trim().length >= 6) {
      signInWithEmailAndPassword(auth, email, password)
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
            <h1>Sign-in</h1>
            <strong>E-mail</strong>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            {validity === false && <span style={error}>Incorrect E-mail!</span>}
            <strong>Password</strong>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {validity === false && (
              <span style={error}>Incorrect password!</span>
            )}
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
              <button onClick={() => setValidity(null)}>
                Create your Amazon account
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
