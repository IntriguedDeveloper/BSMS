import React, { useState } from "react";
import styles from "./DeleteExistingStudent.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import StudentProfile from "../Components/StudentProfile";
import { AppInstance } from "../firebase";
import { getFirestore, query, getDocs } from "firebase/firestore";
const db = getFirestore(AppInstance);
export default function DeleteExistingStudent() {
  const navigate = useNavigate();
  const [name , setName] = useState("");
  const [roll, setRoll] = useState("");
  const handleRedirect = () =>{ 
    
    navigate('studentProfile');
  }
  

  return (
    <>
      <div className = {styles.deletePageContainer}>
        <div className={styles.deletePage}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <input
                    className="nameIn"
                    type="text"
                    placeholder="Name "
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <input
                    className="rollIn"
                    placeholder="Roll No. "
                    type="number"
                    value={roll}
                    onChange={(e) => {
                      setRoll(e.target.value);
                    }}
                  ></input>
                  <button className="confirmBtn" onClick={handleRedirect}>
                    Confirm
                  </button>
                </>
              }
            ></Route>
            <Route path="studentProfile" element = {<StudentProfile></StudentProfile>}></Route>
            
          </Routes>
        </div>
      </div>
    </>
  );
}
