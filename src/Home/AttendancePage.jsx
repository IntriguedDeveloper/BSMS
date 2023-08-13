import React, { useState, useEffect } from "react";
import "./AttendancePage.css";
import checkIcon from "../assets/cross.png";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AppInstance } from "../firebase";
const db = getFirestore(AppInstance);
const auth = getAuth(AppInstance);
export default function AttendancePage() {
  const [studentRows, setStudentRows] = useState([]);

  useEffect(() => {
    generateStudentRows();
  }, []);
  const generateStudentRows = async () => {
    const user = auth.currentUser;
    const userEmail = user.email;
    const collection_ref_teachers = collection(db, "Teachers");
    const classQuery = query(
      collection_ref_teachers,
      where("Email", "==", userEmail)
    );
    const querySnapShot = await getDocs(classQuery);
    const className = querySnapShot.docs[0].data().Class;
    const collection_ref = collection(
      db,
      `/classes/class-X/${className}/Students/Information`
    );
    const q = query(collection_ref);
    const querySnapShotRows = await getDocs(q);

    const sortedRows = querySnapShotRows.docs
      .map((doc) => doc.data())
      .sort((a, b) => a.roll - b.roll) // Sort by roll number
      .map((studentData, index) => (
        <div className="row" key={index}>
          <div className="column">{studentData.roll}</div>
          <div className="column">{studentData.name}</div>
          <div className="column">
            <img src={checkIcon} className="statusIcon" alt="Check Icon" />
          </div>
        </div>
      ));

    setStudentRows(sortedRows);
  };
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      const formattedValue = i < 10 ? `0${i}` : `${i}`;
      options.push(
        <option key={formattedValue} value={formattedValue}>
          {formattedValue}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Handjet:wght@300&family=Josefin+Sans:wght@500&family=Noto+Serif+Vithkuqi:wght@500&family=Ubuntu:wght@700&display=swap');
      </style>
      <div className="navContainer">
        <nav className="datebar">
          <div className="optionWrapper">
            <input
              type="number"
              className="dateInput"
              placeholder="Day"
            ></input>
            <select className="date-dropdown" id="day">
              {generateOptions(1, 31)}
            </select>
          </div>
          <div className="optionWrapper">
            <input
              type="text"
              className="monthInput"
              placeholder="Month"
            ></input>
            <select className="date-dropdown" id="month">
              <option className="options">January</option>
            </select>
          </div>
          <div className="optionWrapper">
            <input
              className="yearInput"
              type="number"
              placeholder="Year"
            ></input>
            <select className="date-dropdown" id="year">
              {generateOptions(2001, 2030)}
            </select>
          </div>
        </nav>
        <div className="primaryGrid">{studentRows}</div>
      </div>
    </>
  );
}
