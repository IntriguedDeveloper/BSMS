import React from "react";
import "./DeleteExistingStudent.css";
export default function DeleteExistingStudent() {
  return (
    <>
      <div className="deletePageContainer">
        <div className="deletePage">
          <input className="nameIn" type="text" placeholder="Enter student name"></input>
          <input
            className="rollIn"
            placeholder="Enter student roll no:"
            type="number"
          ></input>
          <button className="confirmBtn">Confirm</button>
        </div>
      </div>
    </>
  );
}
