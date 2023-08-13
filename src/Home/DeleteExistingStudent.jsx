import React from "react";
import "./DeleteExistingStudent.css";
export default function DeleteExistingStudent() {
  return (
    <>
      <div className="container">
        <div className="deletePage">
          <input className="nameIn" type="text" placeholder="Name "></input>
          <input
            className="rollIn"
            placeholder="Roll No. "
            type="number"
          ></input>
          <button className="confirmBtn">Confirm</button>
        </div>
      </div>
    </>
  );
}
