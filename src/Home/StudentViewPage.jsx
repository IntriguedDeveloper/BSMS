import React, { useState, useEffect } from "react";
import "./StudentViewPage.css";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";

import { AppInstance } from "../firebase";
const db = getFirestore(AppInstance);
import { getDetails } from "../teacherDetails";
export default function StudentViewPage() {
  const [studentRows, setStudentRows] = useState([]);

  useEffect(() => {
    generateStudentRows();
  }, []);
  const generateStudentRows = async () => {
    let className = (await getDetails()).className;
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
