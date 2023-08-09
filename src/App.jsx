import ClientAuthPage from "./Auth/ClientAuthPage.jsx";
import HomePage from "./Home/HomePage.jsx";
import "./LoadingBar.css";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe(); // Clean up the auth state listener
  }, [auth]);
  if (isLoading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <HomePage></HomePage>
            ) : (
              <ClientAuthPage></ClientAuthPage>
            )
          }
        ></Route>
      </Routes>
    </Router>
  );
}
