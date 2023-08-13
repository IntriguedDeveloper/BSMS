import React, { useState, useEffect } from "react";
import "./StudentViewPage.css";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AppInstance } from "../firebase";
const db = getFirestore(AppInstance);
const auth = getAuth(AppInstance);
export default function StudentViewPage() {
  const [studentRows, setStudentRows] = useState([]);

  useEffect(() => {
    generateStudentRows();
  }, []);
  const generateStudentRows = async () => {
    const user = auth.currentUser;
    const userEmail = user.email;
    console.log(userEmail);
    const collection_ref_teachers = collection(db, "Teachers");
    const classQuery = query(
      collection_ref_teachers,
      where("Email", "==", userEmail)
    );
    const querySnapShot = await getDocs(classQuery);
    const className = querySnapShot.docs[0].data().Class;
    const collection_ref = collection(
      db,
      "/classes/class-X/X-A/Students/Information"
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
        </div>
      ));

    setStudentRows(sortedRows);
  };
  return (
    <>
      <div className="viewContainer">
        <div className="primaryGrid">
          <div className="rowTitle">
            <div className="column">Roll no.</div>
            <div className="column">Names</div>
          </div>
          {studentRows}
        </div>
      </div>
    </>
  );
}
