import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./ClientAuthPage.css";
import { useState } from "react";

const app = initializeApp(firebaseConfig);

export default function ClientAuthPage() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const onSignUp = (event) => {
    console.log(email);
    console.log(password);
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="wrapper">
        <div className="box">
          <div className="upperSection">
            <img
              src="https://play-lh.googleusercontent.com/S5pnsBPGfDMzaYX07wfN5-rwt98SDup2neW16djYn2lC3rDWG5MlLGXxtaRhXlnxXoE9"
              className="logo"
            ></img>
            <h1>Kerala Public School Kadma</h1>
						<h2>Biometric Student Management System</h2>
          </div>
          <form className="inputForm">
            <input
              type="email"
              value={email}
              placeholder="Enter your email : "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
              placeholder="Enter your password : "
            ></input>
            <button className="login" onClick={onLogin}>
              Log In
            </button>
            <a>Or</a>
            <button className="signUp" onClick={onSignUp}>
              Sign Up
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
}
