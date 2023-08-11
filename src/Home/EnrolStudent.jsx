import "./EnrolStudent.css";
import checked from ".././assets/check.png";
import { useState } from "react";
export default function EnrolStudent() {
  const[msgIcon, setMsgIcon] = useState(checked);
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter student name : "
        className="studentName"
      ></input>
      <input
        type="number"
        placeholder="Enter student roll no. : "
        className="studentRoll"
      ></input>
      <button className="fingerprintButton">Request Fingerprint</button>
      <div className="message">
        <a className="status">Fingerprint Enrolled</a>
        <img className="statusIcon" src = {msgIcon}></img>
      </div>

      <button className="submitButton">Enrol Student</button>
    </div>
  );
}
