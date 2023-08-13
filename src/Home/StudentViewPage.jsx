import React, { useState, useEffect } from "react";
import "./StudentViewPage.css";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { AppInstance } from "../firebase";
const db = getFirestore(AppInstance);
export default function StudentViewPage() {
  const [studentRows, setStudentRows] = useState([]);

  useEffect(() => {
    generateStudentRows();
  }, []);
  const generateStudentRows = async () => {
    const collection_ref = collection(
      db,
      "/classes/class-X/X-A/Students/Information"
    );
    const q = query(collection_ref);
    const querySnapShot = await getDocs(q);

    const sortedRows = querySnapShot.docs
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
