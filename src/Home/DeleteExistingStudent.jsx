import React, { useState } from "react";
import styles from "./DeleteExistingStudent.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import StudentProfile from "../Components/StudentProfile";
import { AppInstance } from "../firebase";
import {
  getFirestore,
  query,
  getDoc,
  collection,
  doc,
  getDocs,
  where,
} from "firebase/firestore";
import { getDetails } from "../teacherDetails";
const db = getFirestore(AppInstance);
export default function DeleteExistingStudent() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [rows, setRows] = useState([]);
  const handleRedirect = async () => {
    const className = (await getDetails()).className;
    console.log(className);
    const collection_ref = collection(
      db,
      `/classes/class-X/${className}/Students/Information`
    );
    const q = query(
      collection_ref,
      where("name", "==", name),
      where("roll", "==", roll)
    );

    const querySnapshot = await getDocs(q);

    const newRows = [];
    querySnapshot.forEach((doc) => {
      newRows.push(
        <ol className="studentDetailList">
          <li className="detailStudent">Name : {doc.data().name}</li>
          <li className="detailStudent">Class : {className}</li>
          <li className="detailStudent">Roll No : {doc.data().roll}</li>
        </ol>
      );
    });

    await setRows(newRows);
    navigate("studentProfile");
  };

  return (
    <>
      <div className={styles.deletePageContainer}>
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
            <Route
              path="studentProfile"
              element={<StudentProfile data={rows}></StudentProfile>}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
