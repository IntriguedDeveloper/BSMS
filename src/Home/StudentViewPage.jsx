import React, { useState, useEffect } from "react";
import "./StudentViewPage.css";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { useStudentData } from "../useStudentData";
import { AppInstance } from "../firebase";
const db = getFirestore(AppInstance);
import { getDetails } from "../teacherDetails";
export default function StudentViewPage() {
  const studentData = useStudentData();

  return (
    <>
      <div className="viewContainer">
        <div className="primaryGrid">
          <div className="rowTitle">
            <div className="column">Roll no.</div>
            <div className="column">Names</div>
          </div>
          {studentData.map((student, index) => (
            <div className="row" key={index}>
              <div className="column">{student.roll}</div>
              <div className="column">{student.name}</div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
