import "./EnrolStudent.css";
import checked from ".././assets/check.png";
import { useState } from "react";
import { AppInstance } from "../firebase";
import {getFirestore, doc, setDoc, query, where, getDocs, collection} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const db = getFirestore(AppInstance);
const auth = getAuth(AppInstance);

export default function EnrolStudent() {
  const[msgIcon, setMsgIcon] = useState(checked);
  const[studentName, setStudentName] = useState(null);
  const[studentRoll, setStudentRoll] = useState(null);
  const handleEnrolment = async() => {
    const user = auth.currentUser;
    const userEmail = user.email;
    console.log(userEmail);
    const collection_ref_teachers = collection(db,'Teachers');
    const classQuery = query(collection_ref_teachers, where("Email", "==", userEmail));
    const querySnapShot = await getDocs(classQuery);
    const className = querySnapShot.docs[0].data().Class;
    
    const collection_ref_students = `/classes/class-X/${className}/Students/Information`;
    await setDoc(doc(db, collection_ref_students, studentName), {
      name : studentName,
      roll : studentRoll,
    });
    
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter student name : "
        className="studentName"
        value={studentName}
        onChange={(e) => {setStudentName(e.target.value)}}
      ></input>
      <input
        type="number"
        placeholder="Enter student roll no. : "
        className="studentRoll"
        value={studentRoll}
        onChange={(e) => {setStudentRoll(e.target.value)}}

      ></input>
      <button className="fingerprintButton">Request Fingerprint</button>
      <div className="message">
        <a className="status">Fingerprint successful</a>
        <img className="statusIcon" src = {msgIcon}></img>
      </div>

      <button className="submitButton" onClick={handleEnrolment}>Enrol Student</button>
    </div>
  );
}
