import React from "react";
import "./DeleteExistingStudent.css";
import { Routes, useNavigate, Route } from "react-router-dom";
import StudentProfile from "../Components/StudentProfile";

export default function DeleteExistingStudent() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/studentProfile");
  };

  return (
    <>
      <div className="deletePageContainer">
        <div className="deletePage">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <input
                    className="nameIn"
                    type="text"
                    placeholder="Name "
                  ></input>
                  <input
                    className="rollIn"
                    placeholder="Roll No. "
                    type="number"
                  ></input>
                  <button className="confirmBtn" onClick={handleRedirect}>
                    Confirm
                  </button>
                </>
              }
            ></Route>
            <Route path="/studentProfile" element = {<StudentProfile></StudentProfile>}></Route>
            
          </Routes>
        </div>
      </div>
    </>
  );
}
